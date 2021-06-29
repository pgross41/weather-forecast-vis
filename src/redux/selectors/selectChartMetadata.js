import * as weatherTypes from '../weatherTypes';
import * as precipitationMeta from '../../chartMetadata/precipitationMeta';
import * as temperatureMeta from '../../chartMetadata/temperatureMeta';
import * as windMeta from '../../chartMetadata/windMeta';

/**
 * Grab the correct metadata for a given chart... This isn't actually a redux selector ¯\_(ツ)_/¯
 */
export default (chartName) => (state) => {
  switch (chartName) {
    case weatherTypes.PRECIPITATION:
      return precipitationMeta;
    case weatherTypes.TEMPERATURE:
      return temperatureMeta;
    case weatherTypes.WIND:
      return windMeta;
    default:
      return;
  }
};
