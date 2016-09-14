import { LANGUAGES } from '../../components/language/language.constants';
import {Deferred} from 'ngDeferred';

export class <%=jhiPrefixCapitalized%>LanguageService {

    constructor (@Inject('$translate') private $translate, @Inject('tmhDynamicLocale') private tmhDynamicLocale) {
    }

    changeLanguage(languageKey) {
        this.$translate.use(languageKey);
        this.tmhDynamicLocale.set(languageKey);
    }

    public getAll () : Observable<any> {
        var deferred = new Deferred();
        deferred.resolve(LANGUAGES);
        return deferred.promise;
    }

    getCurrent () {
        var deferred = new Deferred();
        var language = this.$translate.storage().get('NG_TRANSLATE_LANG_KEY');

        deferred.resolve(language);

        return deferred.promise;
    }
}
