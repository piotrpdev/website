---
title: 'Windows ScreenFetch Fast'
date: '2022-06-22'
updated: '2022-08-24'
categories:
  - 'desktop'
  - 'script'
coverImage: '/project-media/windows-screenfetch/thumb.png'
coverWidth: 16
coverHeight: 9
excerpt: Windows-screenFetch but faster
---

<script>
    import speedData from '$lib/assets/json/windows-screenfetch/data.json'
    import SpeedTable from '$lib/components/SpeedTable.svelte'
    import DoubleBar from '$lib/components/DoubleBar.svelte'

    const [beforeTotals, afterTotals] = ["before", "after"].map((data) => Object.assign(
		...Object.keys(speedData[data][0]).map((key) => ({
			[key]: (
				speedData[data].reduce((prev, times) => prev + Number.parseFloat(times[key]), 0) / speedData[data].length
			).toFixed(4)
		}))
	))

    const totalsBarDataLabels = Object.keys(speedData["before"][0]).map((name) => {let newName = name.substring(4); if (newName.length > 12) newName = newName.substring(0, newName.length - 8); return newName})

    const [subBeforeTotals, subAfterTotals] = [beforeTotals, afterTotals].map((totals) => Object.fromEntries(Object.entries(totals).map(([name, val]) => {let newName = name.substring(4); if (newName.length > 12) newName = newName.substring(0, newName.length - 8); return [newName, val]})))

    const totalsBarData = {
		labels: totalsBarDataLabels,
		datasets: [
			{
				label: 'Windows-screenFetch',
				data: subBeforeTotals,
				borderWidth: 2,
				borderColor: 'rgba(255, 134, 159, 1)',
				backgroundColor: 'rgba(255, 134,159,0.4)'
			},
			{
				label: 'Windows-screenFetch-fast',
				data: subAfterTotals,
				borderWidth: 2,
				borderColor: 'rgba(98,  182, 239, 1)',
				backgroundColor: 'rgba(98,  182, 239,0.4)'
			}
		]
	};
</script>

## What is this?

> [_screenFetch was originally made as a "Bash Screenshot Information Tool". Simply, it lets you display detailed information about your system in the terminal, it also comes with a ASCII logo for the detected Linux distribution. This doesn't work on Windows natively and this project is my attempt to provide a solution that does not require obtaining a linux environment on windows._](https://github.com/JulianChow94/Windows-screenFetch)

TL;DR: [_Windows-screenFetch_](https://github.com/JulianChow94/Windows-screenFetch) brings [screenFetch](https://github.com/KittyKatt/screenFetch) to Windows, my project is a **fork** that aims to make it faster, so that it can be used as a splash screen.

## How much faster is it?

11x faster (in my testing). Around 2 seconds to 0.2 seconds.

> _2035.9979ms to 177.4912ms_

<div class="hide-on-mobile">
    <h3>Average</h3>
    
    <DoubleBar title="Windows-screenFetch vs Windows-screenFetch-fast" data={totalsBarData} />
</div>

### Before

<SpeedTable data={speedData.before} totals={beforeTotals} />

### After

<SpeedTable data={speedData.after} totals={afterTotals} />

### Testing Methodology

- Use the [function speed tests provided in the fork](https://github.com/piotrpdev/Windows-screenFetch-fast/blob/master/test/functions_speed.ps1).

- Run speed test 5-10 times before taking the real tests so the script stabilizes.

- Take 10 real tests and record the results (I use [Excel](https://www.microsoft.com/en-ie/microsoft-365/excel)).

- Group the results, calculate the averages, and sort the functions based on average speed.

#### Possible Downfalls

- The test uses [`Measure-Command`](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/measure-command), better alternatives could exist.

  - I assume that Microsoft knows how to make a decent time measuring utility.

- Sample size could be possibly be too small.

  - The deviations are pretty minimal

- While 5-10 initial tests are performed and discarded for the scripts to stabilize, some kind of caching could be going on that skews the results.

  - I assume that since both versions go through this process, there is minimal error.

## How was the speed improved?

### Filtering

The original doesn't really filter properties, which increases memory usage and slows down the script.

For example, this is the **_entire_** original `Get-CPU` function:

```powershell
Function Get-CPU()
{
    return (((Get-CimInstance Win32_Processor).Name) -replace '\s+', ' ');
}
```

If you look at the speed test results above, you can see that this `Get-CimInstance` call is responsible for the function taking `1043.99ms`. That is an _entire second_, and makes up _half_ of the total execution time.

Meanwhile, here is the _new_ one:

```powershell
Function Get-CPU()
{
    return (Get-CimInstance CIM_Processor -Property Name).Name;
}
```

This improved version takes `7.64ms`, that is **_137x_** faster.

### DRY (Don't-Repeat-Yourself)

Turns out the original calls [`Get-CimInstance`](https://docs.microsoft.com/en-us/powershell/module/cimcmdlets/get-ciminstance) every time [`Win32_OperatingSystem`](https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-operatingsystem) or something else is needed, which can be a _very expensive_ call. My version calls the commonly used instances _once_ and then stores them in a variable.

For example, this original function takes `149.64ms`:

```powershell
Function Get-OS()
{
    return (Get-CimInstance Win32_OperatingSystem).Caption + " " +
        (Get-CimInstance Win32_OperatingSystem).OSArchitecture;
}
```

Meanwhile, the new one takes `0.73ms` (**_205x_** faster):

```powershell
$osx = Get-CimInstance Win32_OperatingSystem

# ...

Function Get-OS()
{
    return $osx.Caption + " " +
        $osx.OSArchitecture;
}
```

<br>

Those are the main ones, [here is the commit that added all of the speed improvements](https://github.com/piotrpdev/Windows-screenFetch-fast/commit/3ec8ac68f5ab4d2a04a5adc694ad0512e5b40e5c).

## Where can I get it?

[Here is the GitHub page](https://github.com/piotrpdev/Windows-screenFetch-fast). Alternatively, install it through [Powershell Gallery](https://www.powershellgallery.com/packages/windows-screenfetch-fast):

```powershell
Install-Module -Name windows-screenfetch-fast
```

If you're having errors, here is a solution:

_"If you have followed the installation steps but you're getting the following error:_

```
> The file C:\<yourpath>\screenfetch.ps1 is not digitally signed.
> The script will not execute on the system.

```

_A common fix is to run the powershell command Set-ExecutionPolicy Unrestricted in a shell with administrative privileges."_ - [Here is the original :)](https://github.com/JulianChow94/Windows-screenFetch).
