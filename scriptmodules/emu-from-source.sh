#!/bin/bash

# -------------------------------------------------------------------------------
# Author:     	Michael DeGuzis
# Git:		      https://github.com/ProfessorKaos64/SteamOS-Tools
# Scipt Name:	  emu-from-source.sh
# Script Ver:	  0.1.1
# Description:	script to install emulation softare as a 
#               part of install-debian-software.sh
# Usage:	      N/A, called from another script
# -------------------------------------------------------------------------------

efs_build_ra()
{
  
  mkdir -p ~/retroarch/cores
  cd retroarch
  make DESTDIR=~/retroarch install
  cd ..
  ./libretro-install.sh ~/retroarch/cores
  
}

efs_build_cores()
{
  
  echo "" > /dev/null
  
}

efs_main()
{
  
  # clone and fetch libretro
  git clone git://github.com/libretro/libretro-super.git
  cd libretro-super
  ./libretro-fetch.sh
  
  # build
  efs_build_ra
  
  # clone and fetch super build (evaluating currently)
  #git clone https://github.com/libretro/libretro-super
  
}

# start main
efs_main
