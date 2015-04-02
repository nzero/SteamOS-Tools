#!/bin/bash

# -------------------------------------------------------------------------------
# Author: 	Michael DeGuzis
# Git:		https://github.com/ProfessorKaos64/SteamOS-Tools
# Scipt Name:	install-desktop-software.sh
# Script Ver:	0.2.5
# Description:	Adds various desktop software to the system for a more
#		usable experience. Although this is not the main
#		intention of SteamOS, for some users, this will provide
#		some sort of additional value
#
# Usage:	./steamos-stats.sh [install|uninstall|list] [basic|extra]
# Warning:	You MUST have the Debian repos added properly for
#		Installation of the pre-requisite packages.
#
# -------------------------------------------------------------------------------

# Set vars
options="$1"
type="$2"
apt_mode="install"
uninstall="no"

show_help()
{

clear
cat << EOF
You have two options with this script:

Basic
---------------------------------------------------------------
Standard Debian desktop application loadout.
Based on: http://distrowatch.com/table.php?distribution=debian

Extra
---------------------------------------------------------------
Extra software
Based on feeback and personal preference.

For a complete list, type:
'./install-debian-software list [basic|extra]'

Install with:
'./install-debian-software [install|uninstall|list] [basic|extra]'

Press enter to continue...

EOF

read -n 1
printf "Continuing...\n"
clear

}

# Show help if requested

if [[ "$1" == "--help" ]]; then
        show_help
	exit 0
fi

get_software_type()
{
	
	# set software type
        if [[ "$type" == "basic" ]]; then
                # add basic software to temp list
                software_list="cfgs/basic-software.txt"
        elif [[ "$type" == "extra" ]]; then
                # add full softare to temp list
                software_list="cfgs/extra-software.txt"
        fi
	
}

install_software()
{

	# Set mode and proceed based on main() choice
        if [[ "$options" == "uninstall" ]]; then
                apt_mode="remove"
	else
		apt_mode="install"
        fi

	# Alchemist repos
	# None here for now

	####################################################################
	# Below is UNTESTED!!!!!!!!, trying to split repo preferences
	# Need to test non '-t wheezy' results with current apt prefs
	####################################################################
	
	# Install from Alchemist first, Wheezy as backup
	for i in `cat software.list`; do
		sudo apt-get install $apt_mode $i
	done 
	
	# Packages that fail to install, use Wheezy repositories
	if [ $? == '0' ]; then
		echo -e "\nSuccessfully installed software from Alchemist repo.\n" 
	else
		echo -e "\nCould not install all packages from Alchemist repo, trying Wheezy\n"
		sudo apt-get -t wheezy $apt_mode `cat $software_list`
	fi
	####################################################################
}

show_warning()
{
        clear
        printf "\nIn order to run this script, you MUST have had enabled the Debian\n"
        printf "repositories! If you wish to exit, please press CTRL+C now..."
        printf "\n\n type './install-debian-software --help' for assistance.\n"

        read -n 1
        printf "Continuing...\n"
        sleep 1s
}

main()
{

        # generate software listing based on type
        get_software_type

	if [[ "$type" == "basic" ]]; then

		if [[ "$options" == "uninstall" ]]; then
        		uninstall="yes"

                elif [[ "$options" == "list" ]]; then
                        # show listing from software.temp
                        clear
                        cat $software_list | less
			exit
		fi

		show_warning
		install_software

	elif [[ "$type" == "extra" ]]; then

		if [[ "$options" == "uninstall" ]]; then
                        uninstall="yes"

                elif [[ "$options" == "list" ]]; then
                        # show listing from software.temp
                        clear
			cat $software_list | less
			exit
                fi

		show_warning
		install_software
	fi
}

# Start main function
main
