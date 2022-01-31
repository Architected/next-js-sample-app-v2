import {
  faFileAudio,
  faFileImage,
  faFileVideo,
  faFilePdf,
  faFileWord,
  faFilePowerpoint,
  faFileExcel,
  faFileAlt,
  faTable,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';
import * as mimeTypeHelper from 'architected-client/helper/mimeTypeHelper.js';

const getGroupIcon = (contentTypeGroup) => {
  if (contentTypeGroup == mimeTypeHelper.FILE_AUDIO) return faFileAudio;
  if (contentTypeGroup == mimeTypeHelper.FILE_IMAGE) return faFileImage;
  if (contentTypeGroup == mimeTypeHelper.FILE_VIDEO) return faFileVideo;
  if (contentTypeGroup == mimeTypeHelper.FILE_PDF) return faFilePdf;
  if (contentTypeGroup == mimeTypeHelper.FILE_POWERPOINT)
    return faFilePowerpoint;
  if (contentTypeGroup == mimeTypeHelper.FILE_WORD) return faFileWord;
  if (contentTypeGroup == mimeTypeHelper.FILE_EXCEL) return faFileExcel;
  if (contentTypeGroup == mimeTypeHelper.FILE_ALT) return faFileAlt;
  if (contentTypeGroup == mimeTypeHelper.FILE_TABLE) return faTable;
  if (contentTypeGroup == mimeTypeHelper.FILE_DATABASE) return faDatabase;
};

export { getGroupIcon };
