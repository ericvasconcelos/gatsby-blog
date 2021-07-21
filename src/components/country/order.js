import { returnning } from './resolvers/returnning';
import { join } from './resolvers/join';
import { languages } from './resolvers/languages';
import { translation } from './resolvers/translation';
import { currencies } from './resolvers/currencies';
import { quantity } from './resolvers/quantity';
import { regionalBlocs } from './resolvers/regionalBlocs';

const order = [
  {
    key: 'capital',
    name: 'Capital',
    resolver: returnning,
  },
  {
    key: 'languages',
    name: 'Languages',
    resolver: languages,
  },
  {
    key: 'population',
    name: 'Population',
    resolver: quantity,
  },
  {
    key: 'gini',
    name: 'Gini',
    resolver: returnning,
  },
  {
    key: 'currencies',
    name: 'Currencies',
    resolver: currencies,
  },
  {
    key: 'region',
    name: 'Region',
    resolver: returnning,
  },
  {
    key: 'subregion',
    name: 'Subregion',
    resolver: returnning,
  },
  {
    key: 'area',
    name: 'Area',
    resolver: (val) => quantity(val, 'm²'),
  },
  {
    key: 'latlng',
    name: 'Latitude and longitude',
    resolver: join,
  },
  {
    key: 'borders',
    name: 'Borders',
    resolver: join,
  },
  {
    key: 'regionalBlocs',
    name: 'Regional blocs',
    resolver: regionalBlocs,
  },
  {
    key: 'timezones',
    name: 'Timezones',
    resolver: join,
  },
  {
    key: 'numericCode',
    name: 'Numeric code',
    resolver: returnning,
  },
  {
    key: 'translations',
    name: 'Translations of name',
    resolver: translation,
  },
  {
    key: 'callingCodes',
    name: 'Calling codes',
    resolver: join,
  },
  {
    key: 'topLevelDomain',
    name: 'Top level domain',
    resolver: join,
  },
  {
    key: 'cioc',
    name: 'CIOC',
    resolver: returnning,
  },
  {
    key: 'alpha2Code',
    name: 'Alpha 2 code',
    resolver: returnning,
  },
  {
    key: 'alpha3Code',
    name: 'Alpha 3 code',
    resolver: returnning,
  },
  {
    key: 'altSpellings',
    name: 'Alternative spellings',
    resolver: join,
  },
  {
    key: 'demonym',
    name: 'Demonym',
    resolver: returnning,
  },
];

export default order;
