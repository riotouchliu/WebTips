
import { ref } from 'vue';
import type { SectionData } from './Datas';

import rk3588Res from '../assets/images/ic_rk_3588.png';
import adv311d2Res from '../assets/images/ic_311d2.png';
import adv100Res from '../assets/images/ic_ad_v100.png';
import ad982Res from '../assets/images/ic_982.png';
import ltsRes from '../assets/images/ic_app_lts.png';

import umindRes from '../assets/images/ic_umind.png';
import ufileRes from '../assets/images/ic_u_file.png';
import settingRes from '../assets/images/ic_setting.png';
import aiRes from '../assets/images/ic_ai_mindspeech.png';
import recordRes from '../assets/images/ic_record_screen.png';
import upictureRes from '../assets/images/ic_u_picture.png';
import calculatorRes from '../assets/images/ic_calculator.png';
import calendarRes from '../assets/images/ic_calendar.png';

class SectionDataManager {
  private sectionData = ref<SectionData>({
    new: {
      title: 'NEW',
      cards: [
        { text: 'New Function', type: 'new' }
      ]
    },
    device: {
      title: 'DEVICE',
      cards: [
        { text: 'RK3588', type: 'device', iconContent: rk3588Res,url: 'https://riotouch.com/en/RK3588.html' },
        { text: 'ADV311D2', type: 'device', iconContent: adv311d2Res,url: 'https://riotouch.com/en/adv311d2.html' },
        { text: 'ADV100', type: 'device', iconContent: adv100Res, url: 'https://riotouch.com/en/ADV100.html' },
        { text: '982', type: 'device', iconContent: ad982Res , url: 'https://riotouch.com/en/interactive-flat-panel-t982.html'},
        { text: 'LTS', type: 'device', iconContent: ltsRes ,url: 'https://riotouch.com/en/LTS.html'}
      ]
    },
    app: {
      title: 'APP',
      cards: [
        { text: 'Umind', type: 'app', iconContent: umindRes },
        { text: 'UFile', type: 'app', iconContent: ufileRes },
        { text: 'Setting', type: 'app', iconContent: settingRes },
        { text: 'AI Assistant', type: 'app', iconContent: aiRes },
        { text: 'Record Screen', type: 'app', iconContent: recordRes },
        { text: 'UPicture', type: 'app', iconContent: upictureRes },
        { text: 'Calculator', type: 'app', iconContent: calculatorRes },
        { text: 'Calendar', type: 'app', iconContent: calendarRes }
      ]
    }
  });

  public getSectionData() {
    // Here you can add logic to fetch data from an API
    // and update the sectionData ref
    return this.sectionData;
  }

}

export const sectionDataManager = new SectionDataManager();
