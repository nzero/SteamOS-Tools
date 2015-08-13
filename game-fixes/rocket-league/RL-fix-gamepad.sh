#!/bin/bash

clear
echo -e "==> Patching Rocket Leage (Steam) for Windows...\n"

if [[ -d "home/desktop/.PlayOnLinux" ]]; then

  cp -v x360ce.ini "/home/desktop/.PlayOnLinux/drive_c/Program Files/Steam/steamapps/common/rocketleague/Binaries/Win32/"
  cp -v xinput1_3.dll "/home/desktop/.PlayOnLinux/drive_c/Program Files/Steam/steamapps/common/rocketleague/Binaries/Win32/"

elif [[ -d "home/desktop/.cxoffice" ]]; then

  cp -v x360ce.ini "/home/desktop/.cxoffice/drive_c/Program Files/Steam/steamapps/common/rocketleague/Binaries/Win32/"
  cp -v xinput1_3.dll "/home/cxoffice/.PlayOnLinux/drive_c/Program Files/Steam/steamapps/common/rocketleague/Binaries/Win32/"

elif [[ -d "home/desktop/.wine" ]]; then

  cp -v x360ce.ini "/home/desktop/.wine/drive_c/Program Files/Steam/steamapps/common/rocketleague/Binaries/Win32/"
  cp -v xinput1_3.dll "/home/desktop/.wine/drive_c/Program Files/Steam/steamapps/common/rocketleague/Binaries/Win32/"

fi

echo -e "Patch applied\n"

echo -e "Please restart Steam for Windows under the dekstop user\n"
echo -e "This is intended only for wired/wireless XB360 controllers"

