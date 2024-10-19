import { defaultLocale, getDictionary, languages } from '@/lib/i18n';

export default function About() {
	return <></>;
}
export async function generateStaticParams() {
  // Replace this with your logic to fetch available languages

  return languages.map(lang => {
    return {
      lang,
    };
  });
}