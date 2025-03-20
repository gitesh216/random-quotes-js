const imgUrls = [
  {
    url: "https://plus.unsplash.com/premium_photo-1674500773399-3644ee0c4fb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1674086524511-567ad049a61a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1712685912274-2483dade540f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1741926376117-85ec2cef9714?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1741800459656-4116dcb230ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1701764129004-993c92b82d1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1534880579667-055281049f8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1669748151567-f2c4c55be354?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1737587653765-94bc8fe7b541?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1711065404196-5a4a9b4acce2?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
console.log(imgUrls[0].url);

function setBgImage() {
  const bgImg = document.getElementById("quote-bgImg");
  const ranInd = Math.floor(Math.random() * 10);
  bgImg.src = imgUrls[ranInd].url;
}

async function getRandomQuote() {
  const data_res = await fetch(
    "https://api.freeapi.app/api/v1/public/quotes/quote/random"
  );
  const data = await data_res.json();
  const obj = {
    quote: data["data"].content,
    author: data["data"].author,
  };
  // console.log(obj);
  return obj;
}

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");

async function setQuote() {
  const data = await getRandomQuote();
  console.log(data);

  quoteText.innerText = data.quote;
  quoteAuthor.innerText = data.author;
}
setQuote();
setBgImage();

const newQuoteBtn = document.getElementById("newQuoteBtn");
newQuoteBtn.addEventListener("click", () => {
  setQuote();
  setBgImage();
});

const copyClipboard = document.getElementById("copy-clipboard-btn");
copyClipboard.addEventListener("click", () => {
  const copyText = document.getElementById("quote-text").innerText;
  navigator.clipboard
    .writeText(copyText)
    .then(() => {
      alert("Quote copied to clipboard!");
    })
    .catch((err) => {
      console.error("Error copying text: ", err);
    });
});

const twitterBtn = document.getElementById("twitterBtn");
twitterBtn.addEventListener("click", () => {
  const text = document.getElementById("quote-text").innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    text
  )}`;
  window.open(twitterUrl, "_blank");
});

const exportBtn = document.getElementById("exportBtn");
// exportBtn.addEventListener("click", () => {
//   const img = document.getElementById("quote-bgImg");
//   const text = document.getElementById("quote-text").innerText;
//   const author = document.getElementById("quote-author").innerText;

//   const canvas = document.getElementById("canvas");
//   const ctx = canvas.getContext("2d");

//   canvas.width = img.width;
//   canvas.height = img.height;

//   const imageObj = new Image();
//   imageObj.crossOrigin = "anonymous";
//   imageObj.src = img.src;
//   imageObj.onload = function () {
//     ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);

//     ctx.font = "30px Arial";
//     ctx.fillStyle = "white";
//     ctx.textAlign = "center";
//     ctx.fillText(text, canvas.width / 2, canvas.height / 2);

//     const link = document.createElement("a");
//     link.download = "exported-image.png";
//     link.href = canvas.toDataURL("image/png");
//     link.click();
//   };
// });

exportBtn.addEventListener(("click"), ()=>{
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const img = document.getElementById("quote-bgImg");
    const text = document.getElementById("quote-text").innerText;
    const author = document.getElementById("quote-author").innerText;

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.font = "bold 24px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const textX = canvas.width / 2;
    const textY = canvas.height / 2 - 20;
    wrapText(ctx, text, textX, textY, canvas.width * 0.8, 28);

    ctx.font = "italic 18px Arial";
    ctx.fillText(`- ${author}`, textX, textY + 50);

    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "quote.png";
    link.click();
})

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(" ");
    let line = "";
    let lines = [];

    for (let word of words) {
        let testLine = line + word + " ";
        let testWidth = ctx.measureText(testLine).width;
        if (testWidth > maxWidth) {
            lines.push(line);
            line = word + " ";
        } else {
            line = testLine;
        }
    }
    lines.push(line);
    let startY = y - ((lines.length - 1) * lineHeight) / 2;
    lines.forEach((line, i) => {
        ctx.fillText(line.trim(), x, startY + i * lineHeight);
    });
}