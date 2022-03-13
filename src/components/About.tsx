import { useLang } from 'context/langContext';
import { useEffect, useState } from 'react';
import { api } from 'services/api';

import { DownArrow } from './Icons';

interface Data {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  thirdParagraph: string;
}

const INITIAL_DATA: Data = {
  title: '',
  firstParagraph: '',
  secondParagraph: '',
  thirdParagraph: '',
};

export default function About() {
  const [lang] = useLang();
  const [data, setData] = useState<Data>(INITIAL_DATA);

  useEffect(() => {
    setData(api.get.about(lang));
  }, [lang]);

  return (
    <section className="page gap-8 px-8 pb-6" id="about-me">
      <h2>{data.title}</h2>
      <article className="flex flex-col max-w-[500px] text-center items-center gap-8">
        <span>{data.firstParagraph}</span>
        <span>{data.secondParagraph}</span>
        <span>{data.thirdParagraph}</span>
      </article>
      <DownArrow href="#techs" />
    </section>
  );
}
