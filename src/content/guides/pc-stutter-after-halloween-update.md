---
title: "Valor Mortis PC Stutter: What to Check After the November 23 Patch"
description: "Troubleshoot Valor Mortis PC stutter after the November 23 patch. Check startup shaders, Chapter 6 and 7 hitches, Radeon timeouts, and upscaling."
category: settings
status: official
sourceKeys: []
demoNotice: false
preRelease: false
order: 1
cover: /images/vm-decaying-boulevard.webp
updatedAt: "2026-11-24"
---

<figure>
  <img src="/images/vm-decaying-boulevard.webp" alt="A decaying city boulevard with stone buildings in Valor Mortis" width="1920" height="1080" loading="lazy" decoding="async" />
  <figcaption>Official Valor Mortis screenshot via Steam. For a repeatable route check, choose a nearby landmark you can reach from the same checkpoint.</figcaption>
</figure>

On the Windows Steam release, install the [November 23 update](https://steamcommunity.com/app/2828710/announcements/) and let its startup shader preparation finish before judging stutter. Then repeat the same short route at the same settings. The patch moves shader compilation to startup and targets slowdowns in Chapter 7, at Chapter 6’s floating river platforms, and in some scenes with active enemies. An AMD driver timeout calls for a separate check, especially on Radeon RX 7000 hardware.

## Pick a test that matches the symptom

| When it happens | First check |
| --- | --- |
| Only while the game starts | Let preparation finish. Compare gameplay after a normal relaunch with the same settings. |
| At a Chapter 6 floating platform or in Chapter 7 | Repeat the same stretch twice and compare with a calm route. Record the first landmark where it hitches. |
| Only while enemies are active | Repeat the same approach. Note which enemy reaction or action precedes the pause. |
| In calm areas and fights | Lower rendering resolution or change one upscaling setting. See whether the sustained frame rate or the specific hitch changes. |
| At a black screen, crash, or driver-timeout notice | Record the GPU and driver first. Note whether the game recovered or exited, then use the driver check below. |

## First identify the kind of slowdown

Separate a consistently low frame rate from intermittent pauses. If every camera movement feels similarly slow, reducing rendering workload is a reasonable first experiment. If the game moves smoothly between occasional sharp interruptions, investigate frame delivery and repeatability before sacrificing image quality. A single average frame-rate number can hide the difference. Observe the same short stretch of gameplay several times and write down whether the pause occurs at the same doorway, attack, camera turn, or new visual effect.

Keep combat and travel tests separate. A crowded fight introduces enemy behavior, particles, aiming changes, and animation changes at once. Start with a safe route you already know, then repeat one ordinary encounter when you have a stable baseline. If travel is smooth but a particular action repeatedly hitches, record the action and weapon. That report is more useful than saying the whole game is unplayable, and it stops you changing unrelated settings to solve an isolated event.

## Confirm the installed update before testing

Close the game and check that Steam has completed pending downloads. Relaunch only after installation has finished. Record the date, your current game version if the menu exposes it, and whether the problem began before or after the update. Use November 23, 2026, as the comparison date for the Steam update. If you play through a different store or on console, use that platform’s update history before assuming the same build is installed. Windows driver and shader troubleshooting below applies to PC.

If files may be damaged, use Steam's installed-file verification from the game's Properties. Let the check finish before drawing conclusions, and keep any existing save backup separate from the installation. Verification is a diagnostic step, not a guaranteed performance fix. Avoid combining a reinstall, new driver, cache reset, and several graphical changes in one attempt: even if performance improves, you will have no idea which change mattered or what to reverse if another problem appears.

## Use the published hardware targets correctly

The PC listing specifies Windows 10 or 11, 16 GB of memory, DirectX 12, 60 GB of available space, and an SSD. Its minimum CPU examples are the Ryzen 5 3600 and Core i5-10600K, paired with an RX 5600 XT or GTX 1660 Ti. The stated minimum target is 30 frames per second at 1080p on Low with upscaling. Treat that as a published configuration target, not a promise that every scene will hold that rate.

The recommended examples are a Ryzen 7 5800X or Core i5-13400 with an RX 6800 or RTX 3070. The listing describes 60 frames per second at 1440p on Medium with upscaling. A system near those specifications should therefore be compared with that stated workload before testing higher resolutions or maximum settings. Keep enough SSD space for updates as well as the game. An older hard drive or background disk activity can complicate a test even when the graphics card looks adequate.

## Retest the route before clearing a shader cache

The October 27 update suggested recreating the shader cache for some PC stutter. The November 23 patch changes the order of operations by moving compilation to startup instead of compiling per level or on an immediate level reload. Begin with the updated game and its current cache. Wait for any visible startup preparation, then check whether the same pause appears on a second traversal. If a normal relaunch changes the pattern, write down which run hitched and where.

Use a safe checkpoint and two landmarks that bracket the problem. In Chapter 6, record whether the frame drop begins on the approach, when a platform moves, or after you step off. In Chapter 7, record the building, junction, or encounter where the slowdown begins, and whether it clears after moving away. If only a combat pass hitches, note the action before the pause and whether the scene was already active. These observations help distinguish a persistent route problem from a slowdown limited to one encounter.

If you still have a repeatable issue and the supported GPU or Windows instructions identify a shader-cache reset, run it after closing the game and record that as a separate change. Keep saves and unrelated configuration files intact. Allow startup preparation again before repeating your control route and the problem route. Without a before-and-after comparison, a rebuild may discard useful evidence about when the problem began.

## Change one rendering variable at a time

Begin with a sensible preset for the published hardware target, then test a lower rendering workload if the frame rate remains consistently below your intended target. Use the resolution and upscaling controls actually available in your installed build. Record the old value before changing it. The November patch also fixes a graphics reset that could leave the previous upscaler selected. If you are establishing a default baseline, use Restore to defaults and reopen the menu to verify the active upscaler before comparing results. A useful experiment is small enough to reverse and specific enough to show whether the graphics workload is contributing to the problem.

If a lower workload raises the average frame rate but leaves the same sharp pause at the same location, record both results. The improvement is real, but it has not resolved the interruption. If a frame-rate limit is available, compare a sustainable limit with an unstable higher target; consistent frame delivery may feel better than a higher average. Keep your display mode and background applications constant so that this comparison does not quietly become a different test.

## Check a Radeon driver timeout separately

If Windows reports a driver timeout on a Radeon RX 7000 PC, the developer names Adrenalin 26.10.2 in the November patch notes. [AMD’s release notes](https://www.amd.com/en/resources/support-articles/release-notes/RN-RAD-WIN-26-10-2.html) list a Valor Mortis timeout fix for the RX 7000 series and a shutdown fix specifically for the RX 7600 series. Check the currently installed driver against a compatible vendor-supported release that includes the fix. If you already have a newer compatible driver, record its version and check the vendor’s guidance before changing it. Use your device manufacturer’s update channel when it supplies a customized graphics package.

For a crash when backstabbing a red enemy in Chapter 12, report the chapter and action if it still happens on the updated build. That reproducible crash signature is more useful than turning every graphical setting down. An ordinary motion hitch with no driver error can still be tested against the route and render workload.

Temporarily close unnecessary recording tools, browser tabs, and other demanding applications for one comparison. If you disable an overlay, change only that overlay and document the result. Keep security software and operating-system protections intact. An improvement with recording disabled tells you something useful about capture overhead; it does not prove the game's renderer is fault-free. Once you find a stable configuration, restore optional applications one at a time to identify the condition that brings the problem back.

## Know when to submit a reproducible report

Submit a crash report when the game requests one, and distinguish a crash from a long hitch or a temporary frame-rate drop. Include the chapter and location, hardware, driver version, display resolution, selected preset, and the shortest sequence that reproduces the issue. Describe whether the problem survives a restart and whether it happens on repeated passes. A brief clip can help show timing, but avoid including account details or unrelated private desktop content.

Stop broad troubleshooting when your next experiment would risk your save or requires an unofficial executable. Preserve your working configuration and the results already collected. The update explicitly aims to improve stuttering, but it does not guarantee every PC problem is solved. The practical goal is a repeatable, playable setup and a clear report for anything that remains. If performance stabilizes, resume normal play before adjusting visual quality upward one step at a time.

Continue with the [October combat patch guide](/valor-mortis-october-21-hitbox-and-combat-guide/) or the [full-game guide index](/guides/).
