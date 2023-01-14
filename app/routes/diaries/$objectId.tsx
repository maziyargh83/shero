import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import moment from "moment-jalaali";
import { Fragment, useEffect, useRef, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { LargeLogo } from "~/components/Icons/Logo";

export const loader = async ({ params }: LoaderArgs) => {
  try {
    // const data = await axios.get(
    //   "https://api.shero.info/diary/public/" + params
    // );
  } catch (error) {}
  return {
    data: {
      objectId: "63be3b52fd45443a6a4c8bd1",
      text: "Asdmalksdmklasmdlkmasdlkmlamskdmaklsmdkamdlkmaskdmkasmdlkamsdlkmakldsmkamskldmalskmdlkasmdlkamsdlkmaslkdmkamslkdmaklsmdlamslkdmaklsmdlkamsdlkmaslkdmaklsmdlkasmdlkmaskdmskmkskksksksksksksksmaskdmalksmdlkasmdlkmaskdmaskldmlkasdmkasmdklasdlkamsdma;sdmasdmaksdmklasdmlaksmdlsmdlkamsdlkamskldmasldmlamsdkmasldmsamkasmdlakmsdlkmaskdmaskldmaksmdakmsdkamsdlkmasdlkmaskdmalskdmlmaskdmaskldmlsakmdlamslkdmaslkmdlaskmdlasmdlkmsdlksamdlkmlkamsdlkamdsmasldkmsdm;lamas;lamas;masdkmasdkmasdkmasdlkasmdlkmaskmlaksmdl",
      imageLinks: [
        "https://chat-server.s3.ir-thr-at1.arvanstorage.ir/2GEynHaDUNEmYtLX2yDoPZtO9ZMBV632tIfccJMPsuA0SCJa5lHLY73RgC3J..jpg",
        // "https://chat-server.s3.ir-thr-at1.arvanstorage.ir/bPdLSY6V2GbFO0Rka4aRsC5e1nnRotfRXNPfye8rSJ9JhIqspi3OSXPfh7LZ..jpg",
        // "https://chat-server.s3.ir-thr-at1.arvanstorage.ir/E1uPb1mprLjwluTV8mICG0x3sKoZhJ1aeFu8PT4Vyn6wx5I9ykBwmsiemtvn..jpg",
      ],
      voiceLinks: [
        "https://chat-server.s3.ir-thr-at1.arvanstorage.ir/BMNNnUWAgwsQVEk2tHBuIcAmW3SpqUJGnvkBHYo29aHWGgdXh2ZGPSF0AZXE..m4a",
      ],
      mood: 5,
      date: "2023-01-10T20:30:00.000Z",
      diaryCategoryId: "63be2c03f918533b6c069584",
      isPartnerAccess: true,
      isDeleted: false,
      userId: "2b4ee4d0-e361-49d2-b952-9f36f58818b9",
      createdAt: "2023-01-11T04:30:10.202Z",
      updatedAt: "2023-01-11T04:30:10.202Z",
    },
  };
};
export default function Index() {
  const { data } = useLoaderData();
  return (
    <div className="w-screen h-screen bg-red-R2 justify-center items-center flex overflow-hidden">
      <div className="md:w-[450px] w-full h-full md:h-[70vh] bg-red-R3 rounded-3xl relative flex justify-center items-center">
        <div className="w-full h-full absolute top-0 left-0">
          <LargeLogo />
        </div>
        <div className="bg-white  p-6 w-[80%] rounded-3xl z-10">
          <div className="flex ">
            <div className="flex-1">
              <p className="text-gray-G3 font-semibold text-sm">Sarah</p>
            </div>
            <div className="flex items-center h-5 flex-1 justify-between font-normal text-xs text-gray-G7">
              <div>
                {moment(data.date).format("MMM")}
                {moment(data.date).format("DD")}
              </div>
              <div className="h-full w-[1px] bg-gray-G10" />
              <div>{moment(data.createdAt).format("HH:mm")}</div>
            </div>
            <div className="flex-1"></div>
          </div>
          <p className="break-words  mt-3 text-gray-G2 font-normal text-sm">
            {data.text}
          </p>
          {data.voiceLinks && data.voiceLinks.length > 0 && (
            <div className="mt-4">
              <Player audioLink={data.voiceLinks[0]} />
            </div>
          )}
          {data.imageLinks && data.imageLinks.length > 0 && (
            <div className="flex  mt-4">
              <Fragment>
                {data.imageLinks.map((link) => {
                  return <Image link={link} />;
                })}
              </Fragment>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
const Player = ({ audioLink }: { audioLink: string }) => {
  const [playing, setPlaying] = useState(false);

  const [ready, setReady] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext>();
  const [source, setSource] = useState<AudioBufferSourceNode>();
  const [audioBuffer, setaudioBuffer] = useState<AudioBuffer>();
  const [currentTime, setCurrentTime] = useState(0);

  // Connect the audio buffer to the gain node and the gain node to the audio context's destination

  // Fetch the audio file and decode it

  const handlePlayPause = () => {
    if (!audioCtx || !source) return;
    if (playing) {
      source.stop();
      audioCtx.suspend();
    } else {
      audioCtx.resume();
    }
    setPlaying(!playing);
    console.log(playing);
  };

  const handleSeekChange = (event) => {
    if (!audioCtx || !source) return;

    source.stop();
    source.start();
    source.currentTime = event.target.value;
  };
  useEffect(() => {
    if (typeof window !== "undefined") setAudioCtx(new AudioContext());

    return () => {
      if (audioCtx) {
        audioCtx.close();
      }
    };
  }, []);
  useEffect(() => {
    console.log({ audioCtx });

    if (!audioCtx) return;
    const _source = audioCtx?.createBufferSource();
    setSource(_source);
    const gainNode = audioCtx?.createGain();
    _source.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    fetch(audioLink)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => audioCtx.decodeAudioData(arrayBuffer))
      .then((_audioBuffer) => {
        _source.buffer = _audioBuffer;
        console.log(_audioBuffer);
        setaudioBuffer(_audioBuffer);

        _source.start();
        setInterval(() => {
          setCurrentTime(audioCtx.currentTime);
        }, 100);
        setReady(true);
      });
  }, [audioCtx]);
  if (!ready) return;
  return (
    <div className="h-9 w-full rounded-3xl bg-blue-B4 items-center ju flex p-2">
      <FaPlayCircle onClick={handlePlayPause} />
      <div className="flex-1 px-2 flex items-center">
        <input
          type="range"
          min={0}
          max={audioBuffer?.duration}
          value={currentTime}
          onChange={handleSeekChange}
          className="w-full  h-1  rounded-lg appearance-none cursor-pointer range-sm"
        />
      </div>
      <p>{audioBuffer?.duration || "00:00"}</p>
    </div>
  );
};
const Image = ({ link }: { link: string }) => {
  return (
    <div className="flex-1 mx-4">
      <img
        src={link}
        className={"w-full object-cover h-36 rounded-lg"}
        alt=""
      />
    </div>
  );
};
