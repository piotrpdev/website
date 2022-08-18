<svelte:head>

  <title>About</title>
</svelte:head>

<script>
  import EpochCounter from '$lib/components/EpochCounter.svelte';
</script>

# About

## Who are you?

<div class="pfp-container"><img class="pfp" alt="avatar" src="/images/pfp.jpg" /></div>

Hi, my name is Piotr, but you can call Peter.

I was born in Poland but are currently studying for a [BSc (Hons.) in Software Systems Development](https://www.wit.ie/courses/bsc-hons-in-software-systems-development-degree-course) from the [South East Technological University](https://www.setu.ie/) (WIT) in Ireland. I am also planning on pursuing a front end developer position when I graduate.

I mainly make stuff with React and/or TypeScript. However, I have worked with a lot of languages and technologies over the years including PHP, C++/C#, Python, Docker, etc.

If you want to check out some of it or message me, look at the [Contact](/contact) page.

## How did you get started?

I have been passionate about programming for <EpochCounter /> so far, starting off with C++ back in 2018, _not a choice I would recommend for the begineer programmer_. This is an excerpt from one of my first programs:

```cpp
int main() {
displaymenu();
float a;
float b;
int choice;
char confirm;
do {
    cout << "Select your mode(1-4): ";
    cin >> choice;
    cout << "Enter your two numbers(with a space in between them): ";
    cin >>a>>b;
    cout << "\n";
switch(choice){
case 1:cout << "Result: " << Add(a, b);break;
case 2:cout << "Result: " << Subtract(a, b);break;
case 3:cout << "Result: " << Multiply(a, b);break;
case 4:cout << "Result: " << Divide(a, b);break;
//case 5:cout << "Result: " << Modulus(a, b);break; BROKEN
default:cout<<"ERROR: INVALID MODE DETECTED";
}
cout<<"\nPress y or Y to continue:";
       cin>>confirm;
}
while(confirm=='y'||confirm=='Y');

return 0;
}
```

Not very pretty, but everyone starts somewhere. I still remember ocassionaly hopping on [CodeBlocks](https://www.codeblocks.org/) and being fascinated by what you can do by typing out what seemed like nonsense to me at the time. At this point, I was mostly just messing around to see what you could do with this _"programming"_ stuff.

### Becoming a criminal _(maybe)_

At the start of 2020, I began what I would consider to be my first **_actual_** project: a [_Price Tracker_](https://github.com/piotrpdev/WeBuy-Cex-Price-Tracker); a Python script that scraped the Irish [CeX](https://ie.webuy.com/) website and uploaded the results to [Google Sheets](https://www.google.com/sheets/about/).

<div class="media-container"><img class="media" alt="demo of project" src="https://github.com/piotrpdev/WeBuy-Cex-Price-Tracker/raw/master/captures/sheet.gif" /></div>

Me and a friend noticed that the prices on the website would occasionally shift, so naturally, we aimed to ~~manipulate the stock market~~ record the trends and see if we could score a deal.

This was my first exposure to web scraping, which means I had _absolutely no clue where to even begin_. Thankfully, many kind people on the internet have made tutorials on how to do this exact thing. I considered using C++ initially ~~thank god I didn't~~ but after seeing all the web scraping tutorials used Python, I settled on that. _I then proceeded to waste several days of my life by using [BeautfiulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) before learning what API's are and then having to completely rewrite the whole thing. Ah, the wonders of programming_.

Looking back, I made a lot of bad choices and errors along the way, mainly using Google Sheets instead of a database _(this occasionally made me want to bang my head against the wall)_. However, I also think this was a _great_ learning experience. Sure, it was _very_ janky, it broke _constantly_, and it made me _very_ mad sometimes, but it taught me how much fun you could have programming and how you could make stuff that is actually useful, even by yourself.

At this point in my life, I had to effectively decide my future: settle on a college, what to actually study, etc. and honestly, I was pretty lost; I had hobbies, but nothing I could realistically pursue as a career, and that scared me. I didn't like the possibility that I could settle on a career that I would eventually end up hating and be stuck with for the rest of my life.

The offhand choice to work on this project singlehandedly **changed my life** and was the main factor that made me want to become a programmer instead of going into medicine or something like that. Without this project, I could have been in a much darker place in my life right now, however, I am now much happier and excited for the future.

> _Hold on, what about the criminal part?_

Oh yeah, forgot about that. Turns out that [CeX's terms](https://ie.webuy.com/site/terms/) _may_ prohibit the compilation of any parts of their site e.g. prices and/or also hold copyright over them making what I did _technically_ "illegal". But my project is on [GitHub](https://github.com/piotrpdev/WeBuy-Cex-Price-Tracker) and I promise it was for, um, _educational purposes?_ Yeah, that's it. _~~Disclaimer: This is a joke please don't sue me~~_.

### What happened next?

During the past couple of years I have dove headfirst into programming and have worked on a lot of projects. You can find most of them on my [GitHub](https://github.com/piotrpdev) page and/or this [website](/projects).

If you're curious why I stuck with JavaScript instead of Python or C++, it actually relates to what happened _after_ the above story. TL;DR I got curious about modding [Discord](https://discord.com/) and proceeded to dive down a _massive_ rabithole where I ended up falling in love with the language. _Acutally, it might be more of a love/hate relationship now that I think about it_...

## What hobbies are you into?

I'd like to say I'm into a bit of everything, probably due to getting bored easily.

I **love** music, [I even compose my own sometimes](https://musescore.com/piotrbplaczek). I'm a self taught pianist and I am very passionate about everything involved in music including composition, general theory, etc.

I also like messing around with electronics sometimes. I have worked on a couple of small projects ~~and tried soldering a few times~~ involving the Arduino, ESP32, and Raspberry Pi.

Those are the most notable ones. Apart from that, [Science](https://www.youtube.com/user/vsauce), [Maths](https://www.youtube.com/c/3blue1brown), [Flight Simulation](https://www.youtube.com/user/Airforceproud95), [Philosophy](https://www.youtube.com/c/Exurb1a), [English](https://www.dictionaryofobscuresorrows.com/), [Gaming](/images/gmod.png), [Retro Gaming](/images/pkmn.jpg), etc. Again, a bit of everything.

## Did you make this website?

[A part of it](https://github.com/piotrpdev/website), but a lot of the work was done by [Josh Collinsworth](https://github.com/josh-collinsworth/sveltekit-blog-starter). Go check him out, he makes awesome stuff!

By the way, this website was built using [SvelteKit](https://kit.svelte.dev/) and is hosted on [Netlify](https://www.netlify.com/) (_because Vercel is having troubles hosting it_).
