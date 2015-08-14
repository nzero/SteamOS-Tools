See:
https://www.reddit.com/r/linux_gaming/comments/3e58b0/anyone_have_experience_using_xbox_360_controller/

dinput8.dll  is used to block the app from detecting any dinput pads/joysticks so that it only uses XInput (this is needed in my experience for games i use pad with). You have to set xinput8 to "native,builtin" in winecfg. You can use x360ce.exe to configure (needs .net 4, etc installed as stated on appdb.winehq.org entry for x360ce) or just use the editor to edit x360ce.in
