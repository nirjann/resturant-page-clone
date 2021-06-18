import '../style/globals.scss';
import '../style/helpers.scss';
import {renderHeader} from './header';
import {makeChefSkeleton} from './chef';
import {makeContactSkeleton} from './contact';


renderHeader();
makeChefSkeleton();
// renderTabMenu(menuJson);

makeContactSkeleton();