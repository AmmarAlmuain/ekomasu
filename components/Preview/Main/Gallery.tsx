"use client";
/* eslint-disable @next/next/no-img-element */
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function Gallery() {
  return (
    <>
      <PhotoProvider>
        <div className="flex w-96 gap-y-4 justify-center items-start flex-col">
          <PhotoView src="https://media.discordapp.net/attachments/1025486564165427353/1194216375598714920/image.png?ex=65af8bab&is=659d16ab&hm=2e4f5dbf06f950cd2bbfad360a673bd53b8af1da37c0534f1d6ecd1abd9a4ac5&=&format=webp&quality=lossless&width=701&height=701">
            <div className="w-96 h-96 border-2 border-color -center rounded-md">
              <img
                src="https://media.discordapp.net/attachments/1025486564165427353/1194216375598714920/image.png?ex=65af8bab&is=659d16ab&hm=2e4f5dbf06f950cd2bbfad360a673bd53b8af1da37c0534f1d6ecd1abd9a4ac5&=&format=webp&quality=lossless&width=701&height=701"
                alt="gallery view image"
                className="w-[345px] h-[345px] rounded-md"
              />
            </div>
          </PhotoView>
          <div className="h-14 w-full flex justify-between">
            <div className="w-14 h-14 rounded-md border-2 -center border-primary">
              <img
                src="https://media.discordapp.net/attachments/1025486564165427353/1194216427847176283/image.png?ex=65af8bb7&is=659d16b7&hm=689d5c6306fd4d124dce7f1ead432382dbe34a8919876ec5c4a3de5ea955623b&=&format=webp&quality=lossless&width=121&height=121"
                alt="gallery single img"
                className="w-12 h-12"
              />
            </div>
            <div className="w-14 h-14 rounded-md border -center border-color">
              <img
                src="https://media.discordapp.net/attachments/1025486564165427353/1194221248209760296/image.png?ex=65af9035&is=659d1b35&hm=2f3b930d75ab8c33603d9d33df66ac236e466cb76f904f09f6974a797b5412de&=&format=webp&quality=lossless&width=113&height=130"
                alt="gallery single img"
                className="w-12 h-12"
              />
            </div>
            <div className="w-14 h-14 rounded-md border -center border-color">
              <img
                src="https://media.discordapp.net/attachments/1025486564165427353/1194221248209760296/image.png?ex=65af9035&is=659d1b35&hm=2f3b930d75ab8c33603d9d33df66ac236e466cb76f904f09f6974a797b5412de&=&format=webp&quality=lossless&width=113&height=130"
                alt="gallery single img"
                className="w-12 h-12"
              />
            </div>
            <div className="w-14 h-14 rounded-md border -center border-color">
              <img
                src="https://media.discordapp.net/attachments/1025486564165427353/1194216427847176283/image.png?ex=65af8bb7&is=659d16b7&hm=689d5c6306fd4d124dce7f1ead432382dbe34a8919876ec5c4a3de5ea955623b&=&format=webp&quality=lossless&width=121&height=121"
                alt="gallery single img"
                className="w-12 h-12"
              />
            </div>
            <div className="w-14 h-14 rounded-md border -center border-color">
              <img
                src="https://media.discordapp.net/attachments/1025486564165427353/1194221248209760296/image.png?ex=65af9035&is=659d1b35&hm=2f3b930d75ab8c33603d9d33df66ac236e466cb76f904f09f6974a797b5412de&=&format=webp&quality=lossless&width=113&height=130"
                alt="gallery single img"
                className="w-12 h-12"
              />
            </div>
            <div className="w-14 h-14 rounded-md border -center border-color">
              <img
                src="https://media.discordapp.net/attachments/1025486564165427353/1194221248209760296/image.png?ex=65af9035&is=659d1b35&hm=2f3b930d75ab8c33603d9d33df66ac236e466cb76f904f09f6974a797b5412de&=&format=webp&quality=lossless&width=113&height=130"
                alt="gallery single img"
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>
      </PhotoProvider>
    </>
  );
}
