---
title: "Delete Old Valor Mortis Settings"
heading: "Delete the settings file, not the save"
description: "Playtest and demo players with stutters should delete GameUserSettings.ini. The October 16 note gives the path. Do not delete the save folder."
category: settings
status: official
sourceKeys: []
demoNotice: false
preRelease: false
order: 5
cover: "/images/vm-paris-nightmare.webp"
updatedAt: "2026-10-20"
---

<figure>
  <img src="/images/vm-paris-nightmare.webp" alt="A ruined street in Valor Mortis" width="1920" height="1080" loading="lazy" decoding="async" />
</figure>

If you played the Valor Mortis playtest or the demo, and the retail build stutters, the **October 16, 2026** update tells you to delete one file:

`AppData\Local\ValorMortis\Saved\Config\Windows\GameUserSettings.ini`

That path is a settings file. It is not the chapter save. The studio printed it twice in the same note, once in the introduction and once under technical fixes. They would not have repeated it if old settings were not a real cause of the hitch.

Valor Mortis launched **October 13, 2026** at **$39.99**. On **October 20** reviews were Mostly Positive, **1,602** of **2,054**, discount still **0%**. A week of patches will not fix a settings file the demo left behind. You delete that. The game cannot guess which sliders you dragged in June.

## The path, and only the path

`GameUserSettings.ini` lives under `Saved\Config\Windows`. The note does not say to delete `Saved`, and it does not say to delete `ValorMortis`. Deleting the parent folder is how a performance tip becomes a lost Chapter 4.

Do this with the game closed:

1. Copy the file somewhere else first if you want the old sliders back. The note does not require a backup. A backup is how you undo a mistake.
2. Delete `GameUserSettings.ini` only.
3. Update the GPU driver if the new in-game popup says the driver is old. The same patch added driver detection because that was one of the largest stability gains they were seeing.
4. Launch, let the game rewrite the ini, and run one street before you restore a dozen custom binds from memory.

Error logging was also turned down because it could have a minor performance cost in rare cases. That change is in the patch, not in the file you delete. Install the update and delete the ini. Doing only one of those leaves the other cause in place.

## Who this is for

The note addresses players who played the playtest or the demo and now see stutters and significant performance drops. If you never touched those builds, an old ini is less likely to be your hitch. Still update the driver. The popup exists for that case. Do not delete random folders because a demo you did not play might have haunted the disk.

If the hitch is a lost boss save rather than a stutter, you are on the wrong page. [Chapter 4](/guides/chapter-4-save-the-cutscene/) is the save bug. Deleting the ini will not restore a cutscene flag. It also will not destroy one, if you delete only the file named in the note.

## What "better" looks like after the delete

The store page's own targets are the comparison, not a forum's 4K screenshot. Minimum is a Ryzen 5 3600 or i5-10600K, **16 GB** RAM, an RX 5600 XT or GTX 1660 Ti, **60 GB** on an SSD, about 30 frames at 1080p on Low with upscaling. Recommended is a Ryzen 7 5800X or i5-13400 and an RX 6800 or RTX 3070, about 60 frames at 1440p on Medium with upscaling.

A review on October 20 described 4K ultra with ray tracing, DLSS quality, and frame generation holding around 120 frames. That is one machine, not the minimum spec. If your card is the 1660 Ti in the minimum line, deleting the ini should get you closer to the 30-frame Low target. It will not turn that card into the reviewer's frame-generation setup. Chase the target your GPU is listed for.

Upscaling is in both the minimum and recommended notes. Turn it on before you decide the delete failed. A native 4K demand on a minimum GPU is not the bug the ini was causing.

## What not to delete

- Do not delete save games to fix a stutter. The Chapter 4 fix is a reason to keep the save and update the game.
- Do not delete the whole `Config` folder unless you are willing to rebind everything and you have already tried the named file. The note names one ini.
- Do not ignore the driver popup. The studio called outdated drivers one of the biggest stability gaps they were seeing in the first days.
- Do not re-import a playtest ini over the fresh file and then complain the stutter returned. That is the bug, reinstalled.

**39** achievements will still be there after the file is gone. **RookieMistake** was at **67.4%** on October 20. A settings delete does not pop it. A playable frame time lets you reach the fight that does.

The first update was a first round, and the notes say more is coming. This file delete is the part they asked demo players to do themselves. Do that part. Leave the save folder alone.

After the fresh ini exists, change one graphics setting and play one street before you import a page of old binds. The point of the delete is to stop the demo's sliders from driving the retail build. Pasting the old file back is a reinstall of the hitch. Rebind the parry if you must. Leave resolution, upscaling, and frame generation at the defaults until a street holds the frame the spec sheet promised.

That spec sheet is the other half of "is it fixed." Minimum wants an SSD, **60 GB**, **16 GB** of RAM, and a GTX 1660 Ti or RX 5600 XT, at about 30 frames in 1080p Low with upscaling. If you deleted the ini and then demanded native 4K, you did not test the note. You tested a different game. Turn upscaling on. Stand in the street from the screenshot above. Then decide.

A Chapter 4 boss who will not save is not this file. A Chapter 5 quest that will not start is not this file. Both were fixed in the same October 16 notes, and both live in the save, which you were told not to delete. If you already deleted more than the ini, restore the backup before you do anything else. If you have no backup, the boss is a refight, and that is the cost of a wider delete than the note printed.

The driver popup is the last piece. Outdated drivers were called out as a major stability gap. A fresh ini on a year-old driver can still stutter. Update the driver the popup names, then judge the street. **1,602** positive reviews out of **2,054** will not configure the folder for you. The path in the note will. Use the path.
