export interface IHomeSectionResponse {
  data: {
    sections: {
      type: string;
      data: (
        | ISectionAds
        | ISectionAudio
        | ISectionAds
        | ISectionService
        | ISectionBannerResponse
      )[];
    }[];
  };
}

export interface IHorizontalSectionProps {
  dataSection: ISectionAudio;
}

export interface ILatestVideoProps {
  dataLatestSection: ISectionVideo;
}

export interface ISectionBannerResponse {
  type: string;
  data: {
    image: string;
    link: string;
    params: {};
  }[];
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
  audioTranscripts: {
    id: number;
    content: string;
    startTime: number;
    duration: number;
  }[];
  audioHighlightWords: [];
  audioToTopics: {
    id: number;
    topicKey: string;
    topic: {
      key: string;
      description: string;
      slug: string;
      image: null;
    };
  }[];
  level: {
    key: string;
    slug: string;
    description: string;
    translations: {
      name: string;
    }[];
  };
  file: string;
  image: {
    id: number;
    key: string;
    type: string;
    url: string;
    size: number;
  };
}

export interface ISectionService {
  type: string;
  data: { icon: string; link: string; name: string; params: {} }[];
}

export interface ISectionAudio {
  data: IDataAudio[];
  title: string;
  type: string;
}

export interface ISectionAds {
  type: string;
  data: {};
}

export interface ISectionVideo {
  title: string;
  type: string;
  data: {
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
    videoTranscripts: IVideoTranscripts;
    videoToTopics: IVideoToTopics;
    videoHighlightWords: IVideoHighlightWords;
  }[];
}

export interface IVideoTranscripts {
  id: number;
  content: [string];
  startTime: number;
  duration: number;
}

export interface IVideoToTopics {
  id: number;
  topicKey: string;
  topic: string;
}

export interface IVideoHighlightWords {
  id: number;
  evDictId: number;
  evDict: string;
}

export interface ILevel {
  key: string;
  slug: string;
  description: string;
}

export interface IThumbnails {
  high: {
    url: string;
    width: number;
    height: number;
  };
  maxres: {
    url: string;
    width: number;
    height: 720;
  };
  medium: {
    url: string;
    width: number;
    height: number;
  };
  default: {
    url: string;
    width: number;
    height: number;
  };
  standard: {
    url: string;
    width: number;
    height: number;
  };
}

export interface IParamsFeaturePodcast {
  page: number;
  limit: number;
  isFeatured: boolean;
}
// Popup types
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
  icon: any; // hoặc: icon: ImageSourcePropType;
}
