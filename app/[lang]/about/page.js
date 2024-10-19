import { defaultLocale, getDictionary, languages } from '@/lib/i18n';

export default function About() {
	return <></>;
}

export async function generateStaticParams() {
  console.log(languages)
  return languages.map((lang) => ({ lang }))
}