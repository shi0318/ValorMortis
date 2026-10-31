---
title: "Valor Mortis Halloween Update Guide: New Attacks, Skins, and PC Fixes"
heading: "How to Retest Valor Mortis After the Halloween Update"
description: "A practical Valor Mortis guide to the October 27 Halloween update: new Rapier and Saber critical attacks, weapon skins, stutter fixes, and achievement recovery."
category: guide
status: official
sourceKeys: []
preRelease: false
order: 1
updatedAt: "2026-10-30"
cover: "/images/vm-parry.webp"
---

The October 27 **Valor Mortis** Halloween update adds new critical attacks for the **Rapier** and **Saber**, themed weapon skins for melee and ranged equipment, and a set of fixes. The patch also includes stutter and frame-rate improvements for PC, corrects an achievement edge case involving simultaneous player and boss deaths, and adjusts a Chapter 2 mantle and respawn position. Treat it as a gameplay update with targeted stability fixes, not as a new chapter or a full combat overhaul.

<figure>
  <img src="/images/vm-parry.webp" alt="A player timing a parry in Valor Mortis" width="1920" height="1080" loading="lazy" decoding="async" />
  <figcaption>Retest the weapon and encounter that matters to you after confirming the new build is installed.</figcaption>
</figure>

## Install first, then separate the new content from the fixes

Let the platform finish the update before opening the game. On PC, close the game completely, allow Steam to download and apply the patch, then relaunch. The update notes say PC players may need to recreate their shader cache after the stutter and frame-rate changes. That can make the first run after patching behave differently from later runs while shaders are prepared. Do not judge the update from a single brief traversal immediately after installation; load the same area again after the initial cache work settles.

The content changes and bug fixes answer different questions. New weapon skins are cosmetic options for melee and ranged weapons. The new Rapier and Saber critical attacks affect combat presentation and timing. Stutter mitigation and FPS improvements concern PC performance. The Chapter 2 fixes target a specific traversal obstruction and respawn placement. Keeping these categories separate helps you report a remaining issue precisely rather than describing every post-patch difference as a balance change.

## Find the new weapon skins without confusing them with upgrades

The patch adds themed weapon skins for melee and ranged weapons. Check the equipment or customization interface after installing, then inspect the available appearance choices for both weapon types. The announcement does not state that the skins change damage, reach, ammunition, attack speed, or upgrade cost. Treat them as cosmetic unless the live interface explicitly shows a gameplay attribute. A new appearance can make a weapon easier to recognize in a screenshot, but it is not evidence that its combat values changed.

If you want a clean before-and-after record, note the weapon name and current upgrade state before opening the customization options. Change only the skin, then compare the displayed stat panel and one controlled encounter. Avoid combining a skin change with a weapon upgrade, a different skill, and a new enemy; otherwise it will be difficult to identify what changed. If the game displays no mechanical stats for the skin, record that clearly and do not infer a hidden bonus from its theme or animation.

## Learn the Rapier and Saber critical attacks safely

The update adds critical attacks for the Rapier and Saber. Start by checking the in-game control prompt and any weapon description so you know which state triggers a critical. Do not assume the Rapier and Saber use identical timing simply because both received new attacks. Practice against a low-risk enemy or in a space where you can disengage. Observe the required setup, the animation, whether the enemy remains vulnerable afterward, and whether the action consumes a resource shown by the interface.

For a useful comparison, keep the target, distance, equipment upgrades, and encounter conditions consistent. Record the weapon, the preceding action, and what the game marks as a successful critical. A single high-damage result does not prove a new universal damage multiplier; enemy resistance, attack state, and other effects may influence the outcome. The patch announcement confirms that the attacks were added, but it does not publish exact damage values, stagger duration, or a best-in-slot ranking. Build those details only from reproducible retail observations.

## Retest stutter and frame rate on PC

The Halloween update says it includes improvements intended to help address stuttering and improve FPS for PC players. Begin with the same graphics settings, display mode, resolution, and location you used before the update. Play through the same section more than once, including a return visit after the initial shader-cache activity. This separates a persistent traversal hitch from the one-time work that can happen after a patch changes rendering data.

If stutter remains, record whether it happens during movement, combat, a camera turn, or a transition. Note your GPU driver version, graphics preset, upscaling state, frame cap, and whether the game has just compiled shaders. Change one setting at a time and repeat the same route. Avoid deleting configuration files or altering multiple driver overrides before you have a baseline. If your performance problem is a crash rather than a hitch, use a crash report and the current build number instead of treating the FPS note as a general stability guarantee.

## Rebuild the shader cache only when the symptom supports it

The patch specifically notes that PC players may need to recreate the shader cache. This is a targeted troubleshooting step for rendering stutter after the update, not a routine instruction to clear every cache or reinstall the game. First let the game run and revisit the affected area. If the stutter continues after repeated passes, follow the platform’s normal, supported cache-refresh process and give the game time to rebuild data. Keep a note of what you changed so you can restore the prior setup if performance becomes worse.

Do not delete save data while troubleshooting shader compilation. A shader cache and a campaign save serve different purposes. If a setting change makes no measurable difference, revert it before testing another setting. This keeps the test interpretable and protects unrelated progress. Community reports may mention a particular GPU or driver combination, but a report from another machine is a lead, not a guaranteed fix for yours.

## Recover a boss achievement after a simultaneous death

The update fixes an edge case where some players who died at the same time as a boss may have missed the boss achievement or trophy. The patch notes say the achievement should unlock when pressing **Continue** on the main menu. After updating, return to the menu and choose Continue before repeating a boss encounter or deleting a save. Check the achievement list after the load completes. This is the lowest-risk test because it uses the recovery behavior named in the update.

If the achievement still does not appear, note the boss, platform, chapter, whether the simultaneous-death situation happened before or after the patch, and the exact menu action taken. Do not intentionally recreate the simultaneous death to test the old bug. The update addresses the edge case for affected players; it does not say that every missed achievement from a different cause will unlock automatically. Keeping the report specific helps distinguish a fixed case from a separate tracking issue.

## Use the Chapter 2 fixes as route corrections

The update corrects a case in **The Quarry** where a player could get stuck while trying to mantle onto the tower, and adjusts a Chapter 2 respawn position. If you previously hit that obstruction, install the patch, return to the tower using the intended approach, and check that the mantle completes. Do not repeatedly jump from an unrelated ledge or assume every blocked mantle is the same bug. The notes identify one location and one interaction, so test that exact context first.

The respawn change is also localized. If you died nearby before the update, check where the game returns you after a fresh attempt. A changed checkpoint can alter the time needed to retry an encounter without changing the boss itself. Record the landmark and chapter rather than describing it as a global respawn redesign. These details help other players tell whether they reached the corrected spot or are seeing a different checkpoint issue.

## A post-update checklist

Before changing a build, confirm the update is installed; allow initial shader work to settle; check the new Rapier and Saber critical prompts; inspect melee and ranged skins; repeat one known route at unchanged settings; and use Continue to check an achievement missed during a simultaneous boss death. Test the Chapter 2 mantle in The Quarry only if that was your obstruction. Keep each result tied to the platform and current build.

The most reliable takeaway is narrow and useful: the October 27 update adds cosmetic skins and weapon critical attacks, improves PC stutter and frame rate, and fixes several specific progression and tracking cases. It does not publish a new weapon tier list or numerical balance table. Use the live game to verify the exact animation and performance on your system, and keep a reproducible note whenever a result differs from the patch description.
