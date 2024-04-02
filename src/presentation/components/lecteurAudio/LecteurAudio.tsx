export interface ILecteurAudioProps {
    titre: string;
    source: string;
    loop: boolean
}

export function LecteurAudio (props: ILecteurAudioProps) {
  return (
<figure>
  <figcaption>{props.titre}</figcaption>
  <audio controls src={props.source} loop={props.loop}/>
</figure>
  );
}
