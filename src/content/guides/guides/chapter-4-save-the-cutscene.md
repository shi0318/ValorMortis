---
title: "Valor Mortis Chapter 4 Save After the Boss"
heading: "Watch the Chapter 4 cutscene, then confirm the save"
description: "The October 16 update fixed a Chapter 4 post-boss save that could block progress. Confirm the lantern before you quit to desktop."
category: walkthrough
status: official
sourceKeys: []
demoNotice: false
preRelease: false
order: 4
cover: "/images/vm-boss-fight.webp"
updatedAt: "2026-10-20"
---

<figure>
  <img src="/images/vm-boss-fight.webp" alt="A boss fight in Valor Mortis" width="1920" height="1080" loading="lazy" decoding="async" />
</figure>

The first Valor Mortis update, dated **October 16, 2026**, fixed a progress save after the **Chapter 4** boss. The notes say the post-boss sequence was not saving correctly after you defeated the boss and watched the cutscene. In some cases that left players unable to continue. If you are on Chapter 4, the rule is simple: install the update, beat the boss, watch the cutscene, and confirm the next lantern exists before you quit.

Valor Mortis launched **October 13, 2026**. Three days later this patch was the first round of fixes. On **October 20** Steam App **2828710** was **$39.99** with no discount, Mostly Positive at **1,602** positive out of **2,054**. A week-old soulslike with a named chapter blocker is a patching game. Play the patch, not the launch-day save habit.

## What the note actually fixed

The bug was the save after the fight and the cutscene, not the boss's health bar. Nothing in the October 16 notes says Chapter 4's boss was nerfed. If the fight is hard, it is still the fight. What should no longer happen is the specific failure where the cutscene plays and the progress does not stick, so the next session drops you before the door you earned.

The same note fixed a separate blocker on **Chapter 12**, including edge cases where cutscenes might not trigger or might not unlock the next lantern. Chapter 4 and Chapter 12 are both "watch the scene, then check the lantern" chapters now. Do not treat them as the same room. Do treat them as the same habit.

**In the Name of Art**, the Chapter 5 sidequest, had a start-and-progress bug in the same list. If you are passing through Chapter 5 on the way to or from this save, [start that quest on the patched build](/guides/in-the-name-of-art/). A sidequest that will not start is not a reason to rush the Chapter 4 quit.

## How to leave the boss room

1. Update before the attempt if you are not already on the October 16 build. A launch install from October 13 is the build the bug was found on.
2. Beat the boss. Do not alt-tab during the kill blow if you can help it. The bug was the sequence after the kill, and a crash report is still worth sending if the sequence fails. The notes ask for crash reports.
3. Watch the cutscene. Skipping a scene the patch just taught itself to save is a needless variable. Let it finish once.
4. Move until you can see the next lantern, or until the game has clearly placed you past the door. The Chapter 12 line specifically mentions cutscenes that fail to unlock the next lantern. Chapter 4's line is the save after the cutscene. Either way, the lantern is the proof.
5. Quit only after that proof. A quit during the cutscene is the old failure mode. Do not recreate it to save thirty seconds.

If you already lost the progress on a pre-patch kill, the notes do not promise a retroactive save. They promise the sequence saves correctly on the fixed build. Redo the boss on the update. It is a shorter evening than arguing with a dead flag.

## What else in the same patch can look like a lost save

Players who came from the playtest or the demo and are seeing stutters were told to delete `AppData\Local\ValorMortis\Saved\Config\Windows\GameUserSettings.ini`. That file is settings, not your chapter save. Deleting it does not delete Chapter 4. Deleting the wrong folder does. Read the path. [The settings delete](/guides/delete-old-valor-mortis-settings/) is the performance page. This page is the boss page.

GPU driver detection was added in the same update. An outdated-driver popup is not a failed save. Update the driver if the popup says so. The studio said driver version was one of the places they saw the biggest stability gains. A Chapter 4 cutscene that crashes on an old driver is a driver problem wearing a story mask.

Volunteer enemies who stopped attacking after a backstab on patrol were also fixed. "No more free Volunteer kills," in the note's words. That change does not affect whether Chapter 4 saved. It does affect the street after you leave the boss, if you were relying on a backstab to switch their AI off. Parry them. The free kill was the bug.

## Numbers to keep next to the door

**39** achievements on Steam. On October 20, **RookieMistake** was at **67.4%**, **AbyssAccepted** at **62.4%**, and **DrumSolo** at **60.3%**. The thin end of the saved sample included **WeWearTheSameColors** at **6.9%** and **TheBookOfBeasts** at **7.4%**. A Chapter 4 save fix does not pop those. It stops a finished boss from becoming an unfinished chapter, which is how people quit a Mostly Positive game in the first week.

Minimum spec is Windows 10 or 11, a Ryzen 5 3600 or i5-10600K, **16 GB** RAM, an RX 5600 XT or GTX 1660 Ti, and **60 GB** on an SSD, targeting 30 frames at 1080p on Low with upscaling. Recommended is a Ryzen 7 5800X or i5-13400 and an RX 6800 or RTX 3070 for 60 frames at 1440p on Medium with upscaling. A cutscene save does not care which preset you use. A stutter during that cutscene might. If the scene hitch is the crash, delete the old settings file and update the driver before you call the boss unwinnable.

The **$39.99** listing will still be there after you confirm the lantern. The boss will not get easier because you checked. You will not have to fight it twice because you didn't.

The rest of that first patch is worth knowing so you do not "fix" the save by breaking something else. Deleting `GameUserSettings.ini` is for demo and playtest stutters. It is not a Chapter 4 repair, and it is not stored in the same place as the chapter. If a guide tells you to wipe `Saved` to make the cutscene stick, that guide is wrong. The studio named one ini, under `Config\Windows`. Leave every other folder where it is.

Chapter 5's sidequest, In the Name of Art, can fail to start on the unpatched build. That failure is not a sign the Chapter 4 save also failed. Check the chapter number. A boss lantern and a sidequest giver are different doors. Chapter 12's cutscene-and-lantern edge cases are a third door. The habit is the same — watch the scene, confirm the unlock — and the rooms are not. Write the chapter on a note if you are tired. A wrong-chapter reload is how a fixed bug becomes an evening.

Driver detection shipped in the same update because old GPU drivers were one of the largest stability gaps in the first days. A cutscene that crashes before it can save looks exactly like the bug this page describes. If the new popup says the driver is old, update it, then fight the boss again. Sending the crash report, which the notes ask for, is more useful than a fourth attempt on a driver the studio already flagged. The Mostly Positive score at **1,602** of **2,054** includes people who finished fights. Join them on the build that saves the result.
