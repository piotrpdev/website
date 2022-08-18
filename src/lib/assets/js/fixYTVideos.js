// https://css-tricks.com/fluid-width-video/
export default function fixYTVideos() {
    // Select videos
    const fitVids = document.querySelectorAll('iframe[src*="youtube.com"]');
    
    // If there are videos on the page...
    if (fitVids.length) {
        // Loop through videos
        for (var i = 0; i < fitVids.length; i++) {
            // Get Video Information
            const fitVid = fitVids[i];
            const width = fitVid.getAttribute("width");
            const height = fitVid.getAttribute("height");
            const aspectRatio = height / width;
            const parentDiv = fitVid.parentNode;
    
            // Wrap it in a DIV
            const div = document.createElement("div");
            div.className = "fitVids-wrapper";
            div.style.paddingBottom = aspectRatio * 100 + "%";
            parentDiv.insertBefore(div, fitVid);
            fitVid.remove();
            div.appendChild(fitVid);
    
            // Clear height/width from fitVid
            fitVid.removeAttribute("height");
            fitVid.removeAttribute("width");
        }
    }
}
