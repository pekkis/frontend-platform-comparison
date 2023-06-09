import { VideoType } from "@/types";

const preachings: VideoType[] = [
  {
    videoId: "Imjqd9JiG_M",
    title: "Virkamiessaarna 5: fronttidevauksen kristallikallo 2222",
    nsfw: false
  },
  {
    videoId: "2skRbq4lkl8",
    nsfw: false,
    title: "React Helsinki Goes Yle, joulukuu 2022"
  },
  {
    videoId: "0Kl7NIE0Eb8",
    title: "Vuorisaarna 4.0: tekno-evankeliumi 3019",
    nsfw: false
  },
  {
    videoId: "QKE8Eusvp0I",
    title: "40-vuotisjuhlavuorisaarna",
    nsfw: false
  },
  {
    videoId: "OguXQ0zDOko",
    title: "Vuorisaarna II: Toinen tuleminen",
    nsfw: false
  },
  {
    videoId: "Mk5sAUc0EB8",
    title: "React-vuorisaarna",
    nsfw: false
  }
];

const linkzors = [
  {
    title: "Pekkis LinkedInissä",
    url: "https://www.linkedin.com/in/pekkis/"
  },
  {
    title: "Pekkis Githubissa",
    url: "https://github.com/pekkis/"
  },
  {
    title: "Pekkis Twitterissä",
    url: "https://twitter.com/pekkisx"
  },
  {
    title: "Pekkiksen ankara React-valmennus",
    url: "https://pekkis.github.io/hardcore-react-training/"
  },
  {
    title: "Diktaattoripörssi",
    url: "https://www.diktaattoriporssi.com/"
  },
  {
    title: "MHM Online",
    url: "https://www.mhm-online.org/"
  },
  {
    title: "Dr. Kobros Foundation",
    url: "https://www.dr-kobros.com/"
  }
];

export const getPreachings = async () => {
  return preachings;
};

export const getLinkzors = async () => {
  return linkzors;
};
