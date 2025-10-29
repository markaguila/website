const randomDateTemplates = [
  "YYYYMMDD", "WIN YYYYMMDD", "Capture YYYYMMDD", "VID YYYYMMDD", "InShot YYYYMMDD",
  "WhatsApp Video YYYY", "WhatsApp Video YYYY MM DD", "YouCut YYYYMMDD", "Video YYYYMMDD",
  "Desktop YYYY MM DD", "PXL YYYYMMDD"
];

const randomNumberTemplates = [
  "My Stupeflix Video XXXX", "My Movie X", "IMG XXXX", "MVI XXXX", "MOV XXXX", "100 XXXX",
  "SAM XXXX", "DSC XXXX", "SDV XXXX", "DSCFXXXX", "DSCNXXXX", "PICTXXXX", "MAQ0XXXX",
  "FILEXXXX", "GOPRXXXX", "GP01XXXX", "HNI 0XXX", "WA0XXX", "MOL0XX", "P100XXXX", "DJI XXXX",
  "VTS XX X", "VTS XXX 1", "VTS 01 XXX", "Video0XX", "Vid0XX", "MOV000XX"
];

const readyTemplates = [
  "Copy of Copy of", "My Edited Video", "FullSizeRender", "RPReplay", "/Storage/Emulated",
  "DVR", "VLC Record", "Robloxapp", ".MP4", ".3gp", ".MOV", ".AVI", ".WMV", ".FLAC", ".WAV",
  "lv 0", "bmdjAAAF", "Untitled video", "com oculus vrshell", "com oculus metacam", "Recording gvo",
  "You have new picture mail!", "Media1.3gp", "Media1.3g2", "Video.3g2", "New Multimedia Message",
  "Multimedia Message", "Video from my phone", "Video uploaded from my mobile phone",
  "My Slideshow Video", "My Slideshow", "My Stupeflix Video"
];

const allTemplates = readyTemplates.concat(randomDateTemplates, randomNumberTemplates);
