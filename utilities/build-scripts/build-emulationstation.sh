#!/bin/bash
# -------------------------------------------------------------------------------
# Author:	Michael DeGuzis
# Git:		https://github.com/ProfessorKaos64/SteamOS-Tools
# Scipt Name:	build-emulationstation.sh
# Script Ver:	1.0.0
# Description:	Attempts to build a deb package from emulationstation git source
#
# See:		https://github.com/Aloshi/EmulationStation
# Usage:	build-emulationstation.sh
# -------------------------------------------------------------------------------

arg1="$1"
scriptdir=$(pwd)
time_start=$(date +%s)
time_stamp_start=(`date +"%T"`)
# reset source command for while loop
src_cmd=""

# upstream URL
git_url="https://github.com/Aloshi/EmulationStation"

# package vars
pkgname="emulationstation"
pkgrel="1"
dist_rel="brewmaster"
uploader="SteamOS-Tools Signing Key <mdeguzis@gmail.com>"
maintainer="ProfessorKaos64"
provides="emulationstation"
pkggroup="games"
requires=""
replaces="emulationstation"

# set build_dir
build_dir="$HOME/build-${pkgname}-temp"
git_dir="${build_dir}/${pkgname}"

install_prereqs()
{
	clear
	echo -e "==> Installing prerequisites for building...\n"
	sleep 2s
	# install basic build packages
	sudo apt-get -y --force-yes install libsdl2-dev libboost-system-dev libboost-filesystem-dev \
	libboost-date-time-dev libboost-locale-dev libfreeimage-dev libfreetype6-dev libeigen3-dev \
	libcurl4-openssl-dev libasound2-dev libgl1-mesa-dev build-essential cmake fonts-droid checkinstall

}

main()
{
	
	# create and enter build_dir
	if [[ -d "$build_dir" ]]; then
	
		audo rm -rf "$build_dir"
		mkdir -p "$build_dir"
		
	else
	
		mkdir -p "$build_dir"
		
	fi
	
	# install prereqs for build
	install_prereqs
	
	# Clone upstream source code
	git clone "$git_url" "$git_dir"
	
	# Enter git dir for build
	cd "$git_dir" || exit
 
	#################################################
	# Build emulationstation
	#################################################
	
	echo -e "\n==> Bulding ${pkgname}\n"
	sleep 3s
	
	# Creaste build files
	cmake .
  	
	# make package, fail out if incomplete
	if make; then

  	echo -e "\n==INFO==\n${pkgname} build successful"
  	sleep 2s
		
	else 
	
		echo -e "\n==ERROR==\n${pkgname}build FAILED. Exiting in 15 seconds"
		sleep 15s
		exit 1
		
	fi
 
	#################################################
	# Build Debian package
	#################################################

	echo -e "\n==> Building Debian package ${pkgname} from source\n"
	sleep 2s

	sudo checkinstall --pkgname="$pkgname" --fstrans="no" --backup="no" \
	--pkgversion="$(date +%Y%m%d)+git" --pkgrelease="$pkgrel" \
	--deldoc="yes" --maintainer="$maintainer" --provides="$provides" --replaces="$replaces" \
	--pkggroup="$pkggroup" --requires="$requires" --exclude="/home"

	#################################################
	# Post install configuration
	#################################################
	
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
		cd "$scriptdir" || exit
	else
		cd "$HOME" || exit
	fi
	
	# inform user of packages
	echo -e "\n############################################################"
	echo -e "If package was built without errors you will see it below."
	echo -e "If you don't, please check build dependcy errors listed above."
	echo -e "############################################################\n"
	
	echo -e "Showing contents of: ${build_dir}: \n"
	ls ${git_dir}grep -E *.deb

	echo -e "\n==> Would you like to transfer any packages that were built? [y/n]"
	sleep 0.5s
	# capture command
	read -erp "Choice: " transfer_choice
	
	if [[ "$transfer_choice" == "y" ]]; then
	
		# cut files
		if [[ -d "${git_dir}" ]]; then
			scp ${git_dir}/*.deb mikeyd@archboxmtd:/home/mikeyd/packaging/SteamOS-Tools/incoming

		fi
		
	elif [[ "$transfer_choice" == "n" ]]; then
		echo -e "Upload not requested\n"
	fi

}

# start main
main
