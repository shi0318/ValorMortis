---
title: "Valor Mortis Demo Performance — DLSS, XeSS & FSR Fixes"
heading: "Demo Performance & Upscaling: DLSS, XeSS and FSR"
description: "How the Valor Mortis Demo hotfixes improved performance: DLSS 4.5, XeSS 3, FSR4 support, crash fixes, and the driver advice One More Level gave. Officially sourced."
category: "settings"
status: "official"
order: 6
updatedAt: "2026-07-30"
sourceKeys: ["steamDemo", "oneMoreLevel"]
demoVersion: "Demo v1.03"
cover: "/images/vm-decaying-boulevard.webp"
---

After the Demo launched, One More Level shipped a run of hotfixes (v1.01 through v1.03) that changed the performance picture significantly. This page summarises what those official patch notes actually changed. It complements the store-based [settings and requirements page](/demo/settings-and-known-issues/) — this one is specifically about performance and upscaling.

## Upscaling support (v1.02, "DLSS is Back!")

The v1.02 hotfix restored and expanded upscaling:

- **DLSS 4.5** and **XeSS 3** and their accompanying technologies are available for supported GPUs.
- A check was added for **AMD FSR4 Frame Generation** and **AntiLag 2**, so they only enable on cards that support them — a guard against instability.

One caveat the developer flagged: because of Unreal Engine limitations, you should **restart the game after enabling Frame Generation**.

## Crash and stability fixes

Across v1.01–v1.03 the patch notes list a steady stream of stability work, including:

- Crashes from **memory management** as you progress through levels (v1.01).
- Crashes tied to **tutorial screens** and to **blocking enemy attacks** in specific situations.
- A fix for the **Witch Hunt** level crash and for corrupted blood VFX (v1.03).
- Getting **stuck in geometry** on level one, and a respawn bug that left the character stuck.
- Performance passes on level one and the **General Lothaire** boss fight.

## The driver warning worth repeating

One More Level saw reports of poor performance from hardware that should run the game comfortably, and traced past cases to **old Nvidia drivers**. Their advice is blunt: **update your GPU drivers** before assuming the game is at fault. If you are on a supported card and seeing bad frame rates, that is the first thing to rule out.

## Ray tracing

Note that early on, ray tracing was **turned off** while the team worked on a fix (v1.01). If you are comparing the Demo to trailer footage, that is one reason the lighting may differ from a final build.

## What this tells you about launch

The pace and specificity of these hotfixes — DLSS 4.5, XeSS 3, FSR4, driver-specific crash hunts — signal that One More Level is treating the Demo as a live optimisation testbed ahead of the **October 13, 2026** launch. Anything you tune now may behave differently in the shipped game; we will re-test against the release build.

For the confirmed PC requirements and comfort options, see [settings and known issues](/demo/settings-and-known-issues/).
