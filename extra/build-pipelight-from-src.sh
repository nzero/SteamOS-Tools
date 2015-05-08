# -------------------------------------------------------------------------------
# Author:       	Michael DeGuzis
# Git:		        https://github.com/ProfessorKaos64/SteamOS-Tools
# Scipt Name:	    build-pipelight-from-src.sh
# Script Ver:	    0.1.1
# Description:  	Attempts to build pipelight from src
#
# Usage:          ./build-pipelight-from-src.sh
#
# Warning:	      You MUST have the Debian repos added properly for
#	      	        Installation of the pre-requisite packages.
# -------------------------------------------------------------------------------

arg1="$1"
scriptdir=$(pwd)
time_start=$(date +%s)
time_stamp_start=(`date +"%T"`)
# reset source command for while loop
src_cmd=""

show_help()
{
	clear
	cat <<-EOF
	####################################################
	Usage:	
	####################################################
	./build-pipelight-from-src.sh
	./build-pipelight-from-src.sh --help
	source ./build-pipelight-from-src.sh
	
	The third option, preeceded by 'source' will 
	execute the script in the context of the calling 
	shell and preserve vars for the next run.
	
	EOF
}

if [[ "$arg" == "--help" ]]; then
	#show help
	show_help
	exit
fi

install_prereqs()
{
	clear
	echo -e "\n==>Installing pre-requisites for building...\n"
	sleep 1s
	# install needed packages
	sudo apt-get install git devscripts build-essential checkinstall

}

main()
{
	build_dir="/home/desktop/build-pipelight-temp"
	git_dir="$build_dir/git-temp"
	git_url="https://bitbucket.org/mmueller2012/pipelight.git"
	
	clear
	# create build dir and git dir, enter it
	mkdir -p "$git_dir"
	cd "$git_dir"
	
	# If git folder exists, evaluate it
	# Avoiding a large download again is much desired.
	# If the DIR is already there, the fetch info should be intact
	
	if [[ -d "$git_dir" ]]; then
	
		echo -e "\n==Info==\nGit folder already exists! Rebuild [r] or [p] pull?\n"
		sleep 1s
		read -ep "Choice: " git_choice
		
		if [[ "$git_choice" == "p" ]]; then
			# attempt to pull the latest source first
			echo -e "\n==> Attempting git pull..."
			sleep 2s
			cd "$git_dir"
			# eval git status
			output=$(git pull 2> /dev/null)
		
			# evaluate git pull. Remove, create, and clone if it fails
			if [[ "$output" != "Already up-to-date." ]]; then
	
				echo -e "\n==Info==\nGit directory pull failed. Removing and cloning..."
				sleep 2s
				rm -rf "$git_dir"
				mkdir -p "$git_dir"
				cd "$git_dir"
				# clone to current DIR
				git clone "$git_url" .
			fi
			
		elif [[ "$git_choice" == "r" ]]; then
			echo -e "\n==> Removing and cloning repository again..."
			sleep 2s
			# remove, clone, enter
			rm -rf "$git_dir"
			cd "$build_dir"
			mkdir -p "$git_dir"
			cd "$git_dir"
			git clone "$git_url" .
	else
		
			echo -e "\n==Info==\nGit directory does not exist. cloning now..."
			sleep 2s
			# create and clone to current dir
			git clone "$git_url" .
		
		fi
			
	fi
	
 
	#################################################
	# Build source
	#################################################
	
	# Output readme via less to review build notes first
	echo -e "\n==> Opening any available README.md to review build notes..."
	sleep 2s
	
	readme_file=$(find . -maxdepth 1 -type f \( -name "readme" -o -name "README" -o -name "README.md" -o -name "readme.md" \))
	
	less "$readme_file"
	
	# pause for testing
	sleep 50s

	############################
	# proceed to DEB BUILD
	############################
	
	echo -e "\n==> Building Debian package from source"
	echo -e "When finished, please enter the word 'done' without quotes"
	sleep 2s
	
	# build deb package
	sudo checkinstall

	# Alternate method
	# dpkg-buildpackage -us -uc -nc

	#################################################
	# Post install configuration
	#################################################
	
	# TODO
	
	#################################################
	# Cleanup
	#################################################
	
	# clean up dirs
	
	# note time ended
	time_end=$(date +%s)
	time_stamp_end=(`date +"%T"`)
	runtime=$(echo "scale=2; ($time_end-$time_start) / 60 " | bc)
	
	# output finish
	echo -e "\nTime started: ${time_stamp_start}"
	echo -e "Time started: ${time_stamp_end}"
	echo -e "Total Runtime (minutes): $runtime\n"

	
	# assign value to build folder for exit warning below
	build_folder=$(ls -l | grep "^d" | cut -d ' ' -f12)
	
	# back out of build temp to script dir if called from git clone
	if [[ "$scriptdir" != "" ]]; then
		cd "$scriptdir"
	else
		cd "$HOME"
	fi
	
	# inform user of packages
	echo -e "\n############################################################"
	echo -e "If package was built without errors you will see it below."
	echo -e "If you don't, please check build dependcy errors listed above."
	echo -e "cd $build_dir"
	echo -e "cd $build_folder"
	echo -e "############################################################\n"
	
	echo -e "Showing contents of: $build_dir:"
	ls "$build_dir" 
	echo ""
	ls "$git_dir"

}

# start main
main

