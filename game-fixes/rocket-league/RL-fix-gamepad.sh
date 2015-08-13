#!/bin/bash

echo -e "Patching Rocket Leage (Steam) for Windows\n"

cp -v x360ce.ini "/home/desktop/.wine/drive_c/Program Files/Steam/steamapps/common/rocketleague/Binaries/Win32/"
cp -v xinput1_3.dll "/home/dekstop/.wine/drive_c/Program Files/Steam/steamapps/common/rocketleague/Binaries/Win32/"

echo -e "Please restart Steam for Windows under the dekstop user\n"
echo -e "This is intended only for wired/wireless XB360 controllers"

