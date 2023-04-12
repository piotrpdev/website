---
title: 'PC Specs'
date: '2023-04-10'
updated: '2023-04-11'
categories:
  - 'web'
  - 'desktop'
coverImage: '/project-media/pc-specs/thumb.png'
coverWidth: 16
coverHeight: 9
excerpt: Cross platform desktop app that displays your computer specs
---

<script>
	import PostMedia from '$lib/components/PostMedia.svelte';
  import ExtLink from '$lib/components/ExtLink.svelte';
	const media = "/project-media/pc-specs";

  import DoubleBar from '$lib/components/DoubleBar.svelte'

  const xCallback = function (value) {
		return this.getLabelForValue(value);
	}

  const totalsBarData = {
    labels: ["With", "Without"],
		datasets: [
			{
    label: 'With Extension',
				data: {
          "With": 50
        },
				borderWidth: 2,
				borderColor: 'rgba(255, 134, 159, 1)',
				backgroundColor: 'rgba(255, 134,159,0.4)'
			},
			{
				label: 'Without Extension',
				data: {
          "Without": 5
        },
				borderWidth: 2,
				borderColor: 'rgba(98,  182, 239, 1)',
				backgroundColor: 'rgba(98,  182, 239,0.4)'
			}
		]
	};
</script>

## The struggle

What do you use to make a cross-platform desktop app? This is not rhetorical, [please tell me](/contact).

Before embarking on this project, I spent a long time looking for answers to this question. I wanted to make an app that has decent performance and has a small binary size that works on Windows, Mac, and Linux.

The best choices I could find are:

- [Flutter](https://flutter.dev/) 👎
  - Requires Android Studio and is mainly geared towards mobile apps.
- [Electron](https://www.electronjs.org/) 👎
  - Uses Chromium, which is a huge dependency. Also, it's not very performant.
- [NW.js](https://nwjs.io/) 👎
  - Massive binary size, includes Nodejs.
- [Tauri](https://tauri.studio/) 👎
  - This is a new project that looks promising. However, each build must be done on the target OS and takes a _looong_ time. The setup is also a bit complicated.
- [Qt](https://www.qt.io/) 🤷
  - For good performance this would require using C++ and Qt Widgets, which can be complicated to learn. PyQT is also an option, but it's not very performant. The distribution is also a bit complicated. However, I do think this is the best option if you're willing to put in the work.
- [Neutralinojs](https://neutralino.js.org/) 👍
  - This is the best option I found _for my use case_. It's easy to use and has a small binary size.

> I recommend [XPDA](https://xpda.net/) and [this comparison](https://github.com/Elanis/web-to-desktop-framework-comparison) for more information.

## Not again...

<PostMedia alt="sun position" arr="2019 DevRage" src={`${media}/joke.jpg`}>
"Too many js frameworks", taken from <ExtLink href="https://devrant.com/rants/1998678/too-many-js-frameworks">devrant.com</ExtLink>.
</PostMedia>

Since Neutralinojs uses JavaScript, I had to choose a framework for the job. There are _way too many options_, each with their ups and downs. I decided on [Solid.js](https://www.solidjs.com/) because I haven't used it before, and I've heard good things about its performance and approach to state management.

For the app itself, I wanted to make something simple that I could use to learn the framework. I decided to make a simple app that displays your PC specs. I used the [systeminformation](https://www.npmjs.com/package/systeminformation) package to get the data, which nicely displays what information you can obtain on each OS.

To access the system information, I used the [Extensions API](https://neutralino.js.org/docs/how-to/extensions-overview). This allows you to run a binary on the computer and communicate with it using JSON over WebSockets. I decided to use Nodejs for the extension so everything is using the same language, cross-platform bundling and packaging is also easy using [esbuild](https://esbuild.github.io/) and [pkg](https://www.npmjs.com/package/pkg).

## Findings

### Neutralinojs

Neutralinojs is a great tool for building cross-platform desktop apps. It's easy to use and has a lot of features, but the documentation is a bit lacking and confusing. The security is also disappointing, but it's not a big deal for my use case.

### Size

```plaintext
📂 .
├── 📂 dist
│   ├── 📂 pc_specs
│   │   ├── 📂 extensions
│   │   │   └── ...
│   │   ├── 💾 pc_specs-linux_x64      [~2MB]   (app binary)
│   │   ├── 💾 pc_specs-mac_x64        [~2MB]   (app binary)
│   │   ├── 💾 pc_specs-win_x64.exe    [~2MB]   (app binary)
│   │   ├── 💾 resources.neu           [~100KB] (app resources)
│   │   ├── 💾 WebView2Loader.dll      [~400KB] (app resources)
│   │   └── ...
│   ├── 📦 pc_specs_linux_x64.zip  [~20MB]  (app + extension binaries)
│   ├── 📦 pc_specs_mac_x64.zip    [~20MB]  (app + extension binaries)
│   ├── 📦 pc_specs_win_x64.zip    [~15MB]  (app + extension binaries)
│   └── ...
├── 📂 extensions
│   └── 📂 hardware
│       ├── 📄 build.cjs       [~1MB]   (extension bundle)
│       ├── 📄 build-linux     [~50MB]  (extension binary)
│       ├── 📄 build-macos     [~50MB]  (extension binary)
│       ├── 📄 build-win.exe   [~40MB]  (extension binary)
│       ├── 📄 main.js         [~5KB]   (extension module)
│       └── ...
└── 📂 my-app
    └── 📂 dist            [~100KB]  (solidjs+vite build)
        └── ...
```

As you can see in the diagram, the frontend is very small. The extension is also small, but the binaries are huge. The bundled extension is around 1MB, but the binaries are around 50MB each.

50MB each is a lot, especially considering that without the extension the app is usually less than 5MB. This is because the extension is a Nodejs app, and Nodejs is huge.

<div class="hide-on-mobile">
    <DoubleBar className="small" title="With Extension vs Without Extension" xCallback={xCallback} yTitle="Size (MB)" data={totalsBarData} />
</div>

Since you don't have to use Nodejs for the Extensions API, using something like Rust or Go might be a better option for creating the extension. This would allow you to create a much smaller binary. However, then you have to handle the cross-compiling and packaging of this binary.

Thankfully, compressing everything using zip reduces the size to around 20MB for each system, not bad! The .zip files above only include the files needed for their respective platforms.

> Bundled using [esbuild](https://esbuild.github.io/), packaged using [pkg](https://github.com/vercel/pkg)

> I haven't looked into how much size a self-extracting archive would use e.g. using [makeself](https://makeself.io/).

## Conclusion

If you're looking to build a cross-platform desktop app, Neutralinojs is a great option. I would still recommend Qt and C++ or Python for more complex apps, but Neutralinojs is a great option if you're trying to make something quickly and easily.

I think a lot of programs are turning to web apps, e.g. Microsoft Teams or Discord, and I think Neutralinojs is the best option right now if you don't want to include a whole browser in you app.

To include your own code that interacts with the computer you have to use the Extensions API. I think this is fine, but having to handle the cross-compilation for whatever language you use is a bit annoying, especially if you need to compile on each platform separately.

[Here is the final code on GitHub!](https://github.com/piotrpdev/pc-specs)
