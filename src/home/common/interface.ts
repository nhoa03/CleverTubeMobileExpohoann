// ===== COMMON TYPES =====

export interface ITranslation {
  name: string;
}

export interface ILevel {
  key: string;
  slug: string;
  description: string;
  translations?: ITranslation[];
}

export interface IImage {
  id: number;
  key: string;
  type: string;
  url: string;
  size: number;
}

// ===== AUDIO TYPES =====

export interface IAudioTranscript {
  id: number;
  content: string;
  startTime: number;
  duration: number;
}

export interface IAudioToTopic {
  id: number;
  topicKey: string;
  topic: {
    key: string;
    description: string;
    slug: string;
    image: null;
  };
}

export interface IDataAudio {
  id: number;
  title: string;
  desc: string;
  levelKey: string;
  bookLink: string;
  status: string;
  duration: number;
  isFeatured: boolean;
  audioTranscripts: IAudioTranscript[];
  audioHighlightWords: any[]; // If structured, define properly
  audioToTopics: IAudioToTopic[];
  level: ILevel;
  file: string;
  image: IImage;
}

export interface ISectionAudio {
  data: IDataAudio[];
  title: string;
  type: string;
}

// ===== VIDEO TYPES =====

export interface IVideoTranscript {
  id: number;
  content: string[];
  startTime: number;
  duration: number;
}

export interface IVideoToTopic {
  id: number;
  topicKey: string;
  topic: string;
}

export interface IVideoHighlightWord {
  id: number;
  evDictId: number;
  evDict: string;
}

export interface IThumbnails {
  high: { url: string; width: number; height: number };
  maxres: { url: string; width: number; height: 720 };
  medium: { url: string; width: number; height: number };
  default: { url: string; width: number; height: number };
  standard: { url: string; width: number; height: number };
}

export interface IVideoData {
  link: string;
  id: number;
  videoCode: string;
  name: string;
  desc: string;
  length: number;
  isFeature: boolean;
  thumbnails: IThumbnails;
  videoTypesKey: string;
  levelKey: string;
  videoType: string;
  level: ILevel;
  userToMedia: string;
  videoTranscripts: IVideoTranscript;
  videoToTopics: IVideoToTopic;
  videoHighlightWords: IVideoHighlightWord;
}

export interface ISectionVideo {
  title: string;
  type: string;
  data: IVideoData[];
}

// ===== OTHER SECTION TYPES =====

export interface ISectionBannerResponse {
  type: string;
  data: {
    image: string;
    link: string;
    params: {};
  }[];
}

export interface ISectionService {
  type: string;
  data: { icon: string; link: string; name: string; params: {} }[];
}

export interface ISectionAds {
  type: string;
  data: {};
}

// ===== PAGE TYPES =====

export interface IHomeSectionResponse {
  data: {
    sections: (
      | ISectionAds
      | ISectionAudio
      | ISectionService
      | ISectionBannerResponse
    )[];
  };
}

export interface IHorizontalSectionProps {
  dataSection: ISectionAudio;
}

export interface ILatestVideoProps {
  dataLatestSection: ISectionVideo;
}

// ===== MISC TYPES =====

export interface IParamsFeaturePodcast {
  page: number;
  limit: number;
  isFeatured: boolean;
}

// ===== POPUP =====

export interface PopupProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  isSuccess: boolean;
  onPress: () => void;
  title: string;
  description: string;
  textButton: string;
  colorButton: string;
  textClose: string;
  icon: any;
}
