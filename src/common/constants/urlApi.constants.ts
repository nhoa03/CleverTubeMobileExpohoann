export const BASE_URL = "https://clt-prod.api.bilisoftware.com/api";
// export const BASE_URL = 'http://10.0.2.2:5000/api';

export const LOGIN_POST = "/client/login";
export const REGISTER_POST = "/client/register";
export const GET_ALL_LEVELS = "/client/level";
export const GET_ALL_TOPICS = "/client/topic";
export const POST_LEVEL_TOPIC = "/client/choose-level-topics";
export const GET_PODCAST_LIST = "/client/audio";
export const GET_VIDEO_LIST = "/client/video";
export const GET_VIDEO_LIST_FEATURE = "/client/video/feature";
export const GET_AUDIO_DETAIL = "/client/audio/";
export const GET_POPULAR_TOPICS = "/client/topic/featured";
export const GET_INFO_USER = "/client/info";
export const POST_INFO_USER = "/client/update-info";
export const POST_FILE_PRESIGN = "/client/file/presigned-url";
export const POST_UPLOAD_IMAGE = "/client/file/upload-image";
export const CREATE_NEW_FOLDER_FOR_SAVING_WORD = "/user-save-words/group";
export const USER_SAVES_WORD = "/user-save-words/word";
export const ADMIN_DICTIONARY = "/admin/dictionaries";
export const USER_SAVE_MEDIA = "/user-save-media";

export const IS_CHECK_IN = "/client/event-bonus-point/is-check-in";
export const CHECK_IN = "/client/event-bonus-point/check-in-date";

export const AUDIO_VOCAB = "/client/audio-vocab";

// Url Home api
export const HOME_CLIENT = "/client/home";
export const GET_DIAMOND_PACKAGE = "/client/diamond-package";

// MISSION API
export const GET_LIST_MISSION = "/client/mission";
export const EARN_REWARDING = "/client/mission/earn-reward";

export const API_CLIENT_PLAN = "/client/plan";

// ===== API V2 ===========
export const GET_VIDEO_LIST_V2 = "/v2/client/video";
export const GET_VIDEO_TRANSCRIPT_V2 = "/v2/client/video-transcript";
export const GET_VIDEO_VOCAB_V2 = "/v2/client/video-vocab";

// Order
export const API_CLIENT_ORDER = "/client/order";

// ====== API track time audio-video ======
export const API_AUDIO_TRACK_TIME_LISTEN = "/client/audio/track-time-listen";
export const API_VIDEO_TRACK_TIME_WATCH = "/v2/client/video/track-time-watch";

export const EV_DICT_CLIENT = "/client/ev-dict/by-word";

export const USER_VOCAB = "/client/user-vocab";
export const USER_VOCAB_FOLDER = "/client/user-vocab-folder";
export const LEFT_AMOUNT_SAVE_WORD = "/client/user-vocab/left-amount";

export const URL_BUY_GOOGLE_BILLING = "/client/diamond/buy-by-google-billing";
