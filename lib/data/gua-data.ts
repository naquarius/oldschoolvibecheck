// lib/data/gua-data.ts
export interface GuaData {
  id: number;
  name: {
    zh: string;
    en: string;
  };
  name_eng: string;
  full_name: {
    zh: string;
    en: string;
  };
  pronunciation: string;
  symbol: string;
  binary: string;
  judgment: {
    zh: string;
    en: string;
  };
}

export const guaData: GuaData[] = [
  {
    id: 1,
    name: {
      zh: '乾',
      en: 'The Creative',
    },
    name_eng: 'qian',
    full_name: {
      zh: '乾为天 (qián wéi tiān)',
      en: 'Heaven over Heaven',
    },
    pronunciation: 'qián',
    symbol: '䷀',
    binary: '111111',
    judgment: {
      zh: '元、亨、利、贞。',
      en: 'Origination, Success, Advantage, Perseverance. The Creative works sublime success, furthering through perseverance.',
    },
  },
  {
    id: 2,
    name: {
      zh: '坤',
      en: 'The Receptive',
    },
    name_eng: 'kun',
    full_name: {
      zh: '坤为地 (kūn wéi dì)',
      en: 'Earth over Earth',
    },
    pronunciation: 'kūn',
    symbol: '䷁',
    binary: '000000',
    judgment: {
      zh: '元亨，利牝马之贞。君子有攸往，先迷；后得主，利。西南得朋，东北丧朋。安贞吉。',
      en: 'The Receptive brings about sublime success, furthering through the perseverance of a mare. If the superior man undertakes something and tries to lead, he goes astray; but if he follows, he finds guidance. It is favorable to find friends in the west and south, to forego friends in the east and north. Quiet perseverance brings good fortune.',
    },
  },
  {
    id: 3,
    name: {
      zh: '屯',
      en: 'Difficulty at the Beginning',
    },
    name_eng: 'zhun',
    full_name: {
      zh: '水雷屯 (shuǐ léi zhūn)',
      en: 'Water over Thunder',
    },
    pronunciation: 'zhūn',
    symbol: '䷂',
    binary: '100010',
    judgment: {
      zh: '元、亨、利、贞。勿用有攸往。利建侯。',
      en: 'Difficulty at the Beginning works supreme success, furthering through perseverance. Nothing should be undertaken. It is favorable to appoint helpers.',
    },
  },
  {
    id: 4,
    name: {
      zh: '蒙',
      en: 'Youthful Folly',
    },
    name_eng: 'meng',
    full_name: {
      zh: '山水蒙 (shān shuǐ méng)',
      en: 'Mountain over Water',
    },
    pronunciation: 'méng',
    symbol: '䷃',
    binary: '010001',
    judgment: {
      zh: '亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。',
      en: 'Youthful Folly has success. It is not I who seek the young fool; the young fool seeks me. At the first oracle I inform him. If he asks two or three times, it is importunity. If he importunes, I give him no information. Perseverance furthers.',
    },
  },
  {
    id: 5,
    name: {
      zh: '需',
      en: 'Waiting',
    },
    name_eng: 'xu',
    full_name: {
      zh: '水天需 (shuǐ tiān xū)',
      en: 'Water over Heaven',
    },
    pronunciation: 'xū',
    symbol: '䷄',
    binary: '111010',
    judgment: {
      zh: '有孚，光亨。贞吉，利涉大川。',
      en: 'Waiting. If you are sincere, you have light and success. Perseverance brings good fortune. It furthers one to cross the great water.',
    },
  },
  {
    id: 6,
    name: {
      zh: '讼',
      en: 'Conflict',
    },
    name_eng: 'song',
    full_name: {
      zh: '天水讼 (tiān shuǐ sòng)',
      en: 'Heaven over Water',
    },
    pronunciation: 'sòng',
    symbol: '䷅',
    binary: '010111',
    judgment: {
      zh: '有孚窒惕，中吉；终凶。利见大人，不利涉大川。',
      en: 'Conflict. You are sincere and are being obstructed. A cautious halt halfway brings good fortune. Going through to the end brings misfortune. It furthers one to see the great man. It does not further one to cross the great water.',
    },
  },
  {
    id: 7,
    name: {
      zh: '师',
      en: 'The Army',
    },
    name_eng: 'shi',
    full_name: {
      zh: '地水师 (dì shuǐ shī)',
      en: 'Earth over Water',
    },
    pronunciation: 'shī',
    symbol: '䷆',
    binary: '010000',
    judgment: {
      zh: '贞丈人吉，无咎。',
      en: 'The Army. The army needs perseverance and a strong man. Good fortune without blame.',
    },
  },
  {
    id: 8,
    name: {
      zh: '比',
      en: 'Holding Together',
    },
    name_eng: 'bi',
    full_name: {
      zh: '水地比 (shuǐ dì bì)',
      en: 'Water over Earth',
    },
    pronunciation: 'bì',
    symbol: '䷇',
    binary: '000010',
    judgment: {
      zh: '吉。原筮，元永贞，无咎。不宁方来，后夫凶。',
      en: 'Holding Together brings good fortune. Inquire of the oracle once again whether you possess sublimity, constancy, and perseverance; then there is no blame. Those who are uncertain gradually join. Whoever comes too late meets with misfortune.',
    },
  },
  {
    id: 9,
    name: {
      zh: '小畜',
      en: 'The Taming Power of the Small',
    },
    name_eng: 'xiaochu',
    full_name: {
      zh: '风天小畜 (fēng tiān xiǎo xù)',
      en: 'Wind over Heaven',
    },
    pronunciation: 'xiǎo xù',
    symbol: '䷈',
    binary: '111011',
    judgment: {
      zh: '亨。密云不雨，自我西郊。',
      en: 'The Taming Power of the Small has success. Dense clouds, no rain from our western region.',
    },
  },
  {
    id: 10,
    name: {
      zh: '履',
      en: 'Treading',
    },
    name_eng: 'lv',
    full_name: {
      zh: '天泽履 (tiān zé lǚ)',
      en: 'Heaven over Lake',
    },
    pronunciation: 'lǚ',
    symbol: '䷉',
    binary: '110111',
    judgment: {
      zh: '履虎尾，不咥人。亨。',
      en: 'Treading. Treading upon the tail of the tiger. It does not bite the man. Success.',
    },
  },
  {
    id: 11,
    name: {
      zh: '泰',
      en: 'Peace',
    },
    name_eng: 'tai',
    full_name: {
      zh: '地天泰 (dì tiān tài)',
      en: 'Earth over Heaven',
    },
    pronunciation: 'tài',
    symbol: '䷊',
    binary: '111000',
    judgment: {
      zh: '小往大来，吉，亨。',
      en: 'Peace. The small departs, the great approaches. Good fortune. Success.',
    },
  },
  {
    id: 12,
    name: {
      zh: '否',
      en: 'Standstill',
    },
    name_eng: 'pi',
    full_name: {
      zh: '天地否 (tiān dì pǐ)',
      en: 'Heaven over Earth',
    },
    pronunciation: 'pǐ',
    symbol: '䷋',
    binary: '000111',
    judgment: {
      zh: '否之匪人，不利君子贞；大往小来。',
      en: 'Standstill. Evil people do not further the perseverance of the superior man. The great departs; the small approaches.',
    },
  },
  {
    id: 13,
    name: {
      zh: '同人',
      en: 'Fellowship with Men',
    },
    name_eng: 'tongren',
    full_name: {
      zh: '天火同人 (tiān huǒ tóng rén)',
      en: 'Heaven over Fire',
    },
    pronunciation: 'tóng rén',
    symbol: '䷌',
    binary: '101111',
    judgment: {
      zh: '同人于野，亨。利涉大川，利君子贞。',
      en: 'Fellowship with Men in the open. Success. It furthers one to cross the great water. The perseverance of the superior man furthers.',
    },
  },
  {
    id: 14,
    name: {
      zh: '大有',
      en: 'Possession in Great Measure',
    },
    name_eng: 'dayou',
    full_name: {
      zh: '火天大有 (huǒ tiān dà yǒu)',
      en: 'Fire over Heaven',
    },
    pronunciation: 'dà yǒu',
    symbol: '䷍',
    binary: '111101',
    judgment: {
      zh: '元亨。',
      en: 'Possession in Great Measure. Supreme success.',
    },
  },
  {
    id: 15,
    name: {
      zh: '谦',
      en: 'Modesty',
    },
    name_eng: 'qian',
    full_name: {
      zh: '地山谦 (dì shān qiān)',
      en: 'Earth over Mountain',
    },
    pronunciation: 'qiān',
    symbol: '䷎',
    binary: '001000',
    judgment: {
      zh: '亨，君子有终。',
      en: 'Modesty creates success. The superior man carries things through.',
    },
  },
  {
    id: 16,
    name: {
      zh: '豫',
      en: 'Enthusiasm',
    },
    name_eng: 'yu',
    full_name: {
      zh: '雷地豫 (léi dì yù)',
      en: 'Thunder over Earth',
    },
    pronunciation: 'yù',
    symbol: '䷏',
    binary: '000100',
    judgment: {
      zh: '利建侯行师。',
      en: 'Enthusiasm. It furthers one to install helpers and to set armies marching.',
    },
  },
  {
    id: 17,
    name: {
      zh: '随',
      en: 'Following',
    },
    name_eng: 'sui',
    full_name: {
      zh: '泽雷随 (zé léi suí)',
      en: 'Lake over Thunder',
    },
    pronunciation: 'suí',
    symbol: '䷐',
    binary: '100110',
    judgment: {
      zh: '元、亨、利、贞，无咎。',
      en: 'Following has supreme success, perseverance furthers. No blame.',
    },
  },
  {
    id: 18,
    name: {
      zh: '蛊',
      en: 'Work on What Has Been Spoiled',
    },
    name_eng: 'gu',
    full_name: {
      zh: '山风蛊 (shān fēng gǔ)',
      en: 'Mountain over Wind',
    },
    pronunciation: 'gǔ',
    symbol: '䷑',
    binary: '011001',
    judgment: {
      zh: '元亨。利涉大川；先甲三日，后甲三日。',
      en: 'Work on What Has Been Spoiled has supreme success. It furthers one to cross the great water. Before the starting point, three days. After the starting point, three days.',
    },
  },
  {
    id: 19,
    name: {
      zh: '临',
      en: 'Approach',
    },
    name_eng: 'lin',
    full_name: {
      zh: '地泽临 (dì zé lín)',
      en: 'Earth over Lake',
    },
    pronunciation: 'lín',
    symbol: '䷒',
    binary: '110000',
    judgment: {
      zh: '元、亨、利、贞。至于八月有凶。',
      en: 'Approach has supreme success. Perseverance furthers. When the eighth month comes, there will be misfortune.',
    },
  },
  {
    id: 20,
    name: {
      zh: '观',
      en: 'Contemplation',
    },
    name_eng: 'guan',
    full_name: {
      zh: '风地观 (fēng dì guān)',
      en: 'Wind over Earth',
    },
    pronunciation: 'guān',
    symbol: '䷓',
    binary: '000011',
    judgment: {
      zh: '盥而不荐，有孚颙若。',
      en: 'Contemplation. The ablution has been made, but not yet the offering. Full of trust they look up to him.',
    },
  },
  {
    id: 21,
    name: {
      zh: '噬嗑',
      en: 'Biting Through',
    },
    name_eng: 'shihe',
    full_name: {
      zh: '火雷噬嗑 (huǒ léi shì kè)',
      en: 'Fire over Thunder',
    },
    pronunciation: 'shì kè',
    symbol: '䷔',
    binary: '100101',
    judgment: {
      zh: '亨，利用狱。',
      en: 'Biting Through has success. It is favorable to let justice be administered.',
    },
  },
  {
    id: 22,
    name: {
      zh: '贲',
      en: 'Grace',
    },
    name_eng: 'bi',
    full_name: {
      zh: '山火贲 (shān huǒ bì)',
      en: 'Mountain over Fire',
    },
    pronunciation: 'bì',
    symbol: '䷕',
    binary: '101001',
    judgment: {
      zh: '亨，小利有攸往。',
      en: 'Grace has success. In small matters it is favorable to undertake something.',
    },
  },
  {
    id: 23,
    name: {
      zh: '剥',
      en: 'Splitting Apart',
    },
    name_eng: 'bo',
    full_name: {
      zh: '山地剥 (shān dì bō)',
      en: 'Mountain over Earth',
    },
    pronunciation: 'bō',
    symbol: '䷖',
    binary: '000001',
    judgment: {
      zh: '不利有攸往。',
      en: 'Splitting Apart. It does not further one to go anywhere.',
    },
  },
  {
    id: 24,
    name: {
      zh: '复',
      en: 'Return',
    },
    name_eng: 'fu',
    full_name: {
      zh: '地雷复 (dì léi fù)',
      en: 'Earth over Thunder',
    },
    pronunciation: 'fù',
    symbol: '䷗',
    binary: '100000',
    judgment: {
      zh: '亨。出入无疾，朋来无咎。反复其道，七日来复。利有攸往。',
      en: 'Return. Success. Going out and coming in without error. Friends come without blame. To and fro goes the way. On the seventh day comes return. It furthers one to have somewhere to go.',
    },
  },
  {
    id: 25,
    name: {
      zh: '无妄',
      en: 'Innocence',
    },
    name_eng: 'wuwang',
    full_name: {
      zh: '天雷无妄 (tiān léi wú wàng)',
      en: 'Heaven over Thunder',
    },
    pronunciation: 'wú wàng',
    symbol: '䷘',
    binary: '100111',
    judgment: {
      zh: '元、亨、利、贞。其匪正有眚，不利有攸往。',
      en: 'Innocence. Supreme success. Perseverance furthers. If someone is not as he should be, he has misfortune, and it does not further him to undertake anything.',
    },
  },
  {
    id: 26,
    name: {
      zh: '大畜',
      en: 'The Taming Power of the Great',
    },
    name_eng: 'dachu',
    full_name: {
      zh: '山天大畜 (shān tiān dà xù)',
      en: 'Mountain over Heaven',
    },
    pronunciation: 'dà xù',
    symbol: '䷙',
    binary: '111001',
    judgment: {
      zh: '利贞。不家食吉；利涉大川。',
      en: 'The Taming Power of the Great. Perseverance furthers. Not eating at home brings good fortune. It furthers one to cross the great water.',
    },
  },
  {
    id: 27,
    name: {
      zh: '颐',
      en: 'The Corners of the Mouth',
    },
    name_eng: 'yi',
    full_name: {
      zh: '山雷颐 (shān léi yí)',
      en: 'Mountain over Thunder',
    },
    pronunciation: 'yí',
    symbol: '䷚',
    binary: '100001',
    judgment: {
      zh: '贞吉。观颐，自求口实。',
      en: 'The Corners of the Mouth. Perseverance brings good fortune. Pay heed to the providing of nourishment and to what a man seeks to fill his own mouth with.',
    },
  },
  {
    id: 28,
    name: {
      zh: '大过',
      en: 'Preponderance of the Great',
    },
    name_eng: 'daguo',
    full_name: {
      zh: '泽风大过 (zé fēng dà guò)',
      en: 'Lake over Wind',
    },
    pronunciation: 'dà guò',
    symbol: '䷛',
    binary: '011110',
    judgment: {
      zh: '栋桡；利有攸往，亨。',
      en: 'Preponderance of the Great. The ridgepole sags to the breaking point. It furthers one to have somewhere to go. Success.',
    },
  },
  {
    id: 29,
    name: {
      zh: '坎',
      en: 'The Abysmal',
    },
    name_eng: 'kan',
    full_name: {
      zh: '坎为水 (kǎn wéi shuǐ)',
      en: 'Water over Water',
    },
    pronunciation: 'kǎn',
    symbol: '䷜',
    binary: '010010',
    judgment: {
      zh: '习坎；有孚维心，亨；行有尚。',
      en: 'The Abysmal repeated. If you are sincere, you have success in your heart, and whatever you do succeeds.',
    },
  },
  {
    id: 30,
    name: {
      zh: '离',
      en: 'The Clinging',
    },
    name_eng: 'li',
    full_name: {
      zh: '离为火 (lí wéi huǒ)',
      en: 'Fire over Fire',
    },
    pronunciation: 'lí',
    symbol: '䷝',
    binary: '101101',
    judgment: {
      zh: '利贞，亨；畜牝牛吉。',
      en: 'The Clinging. Perseverance furthers. It brings success. Care of the cow brings good fortune.',
    },
  },
  {
    id: 31,
    name: {
      zh: '咸',
      en: 'Influence',
    },
    name_eng: 'xian',
    full_name: {
      zh: '泽山咸 (zé shān xián)',
      en: 'Lake over Mountain',
    },
    pronunciation: 'xián',
    symbol: '䷞',
    binary: '001110',
    judgment: {
      zh: '亨，利贞；取女吉。',
      en: 'Influence. Success. Perseverance furthers. To take a maiden to wife brings good fortune.',
    },
  },
  {
    id: 32,
    name: {
      zh: '恒',
      en: 'Duration',
    },
    name_eng: 'heng',
    full_name: {
      zh: '雷风恒 (léi fēng héng)',
      en: 'Thunder over Wind',
    },
    pronunciation: 'héng',
    symbol: '䷟',
    binary: '011100',
    judgment: {
      zh: '亨，无咎，利贞；利有攸往。',
      en: 'Duration. Success. No blame. Perseverance furthers. It furthers one to have somewhere to go.',
    },
  },
  {
    id: 33,
    name: {
      zh: '遁',
      en: 'Retreat',
    },
    name_eng: 'dun',
    full_name: {
      zh: '天山遁 (tiān shān dùn)',
      en: 'Heaven over Mountain',
    },
    pronunciation: 'dùn',
    symbol: '䷠',
    binary: '001111',
    judgment: {
      zh: '亨，小利贞。',
      en: 'Retreat. Success. In small matters, perseverance furthers.',
    },
  },
  {
    id: 34,
    name: {
      zh: '大壮',
      en: 'The Power of the Great',
    },
    name_eng: 'dazhuang',
    full_name: {
      zh: '雷天大壮 (léi tiān dà zhuàng)',
      en: 'Thunder over Heaven',
    },
    pronunciation: 'dà zhuàng',
    symbol: '䷡',
    binary: '111100',
    judgment: {
      zh: '利贞。',
      en: 'The Power of the Great. Perseverance furthers.',
    },
  },
  {
    id: 35,
    name: {
      zh: '晋',
      en: 'Progress',
    },
    name_eng: 'jin',
    full_name: {
      zh: '火地晋 (huǒ dì jìn)',
      en: 'Fire over Earth',
    },
    pronunciation: 'jìn',
    symbol: '䷢',
    binary: '000101',
    judgment: {
      zh: '康侯用锡马蕃庶，昼日三接。',
      en: 'Progress. The prince is honored with horses in large numbers. In a single day he is granted audience three times.',
    },
  },
  {
    id: 36,
    name: {
      zh: '明夷',
      en: 'Darkening of the Light',
    },
    name_eng: 'mingyi',
    full_name: {
      zh: '地火明夷 (dì huǒ míng yí)',
      en: 'Earth over Fire',
    },
    pronunciation: 'míng yí',
    symbol: '䷣',
    binary: '101000',
    judgment: {
      zh: '利艰贞。',
      en: 'Darkening of the Light. It is favorable to be persevering in difficulty.',
    },
  },
  {
    id: 37,
    name: {
      zh: '家人',
      en: 'The Family',
    },
    name_eng: 'jiaren',
    full_name: {
      zh: '风火家人 (fēng huǒ jiā rén)',
      en: 'Wind over Fire',
    },
    pronunciation: 'jiā rén',
    symbol: '䷤',
    binary: '101011',
    judgment: {
      zh: '利女贞。',
      en: 'The Family. The perseverance of the woman furthers.',
    },
  },
  {
    id: 38,
    name: {
      zh: '睽',
      en: 'Opposition',
    },
    name_eng: 'kui',
    full_name: {
      zh: '火泽睽 (huǒ zé kuí)',
      en: 'Fire over Lake',
    },
    pronunciation: 'kuí',
    symbol: '䷥',
    binary: '110101',
    judgment: {
      zh: '小事吉。',
      en: 'Opposition. In small matters, good fortune.',
    },
  },
  {
    id: 39,
    name: {
      zh: '蹇',
      en: 'Obstruction',
    },
    name_eng: 'jian',
    full_name: {
      zh: '水山蹇 (shuǐ shān jiǎn)',
      en: 'Water over Mountain',
    },
    pronunciation: 'jiǎn',
    symbol: '䷦',
    binary: '001010',
    judgment: {
      zh: '利西南，不利东北；利见大人，贞吉。',
      en: 'Obstruction. The southwest furthers. The northeast does not further. It furthers one to see the great man. Perseverance brings good fortune.',
    },
  },
  {
    id: 40,
    name: {
      zh: '解',
      en: 'Deliverance',
    },
    name_eng: 'jie',
    full_name: {
      zh: '雷水解 (léi shuǐ jiě)',
      en: 'Thunder over Water',
    },
    pronunciation: 'jiě',
    symbol: '䷧',
    binary: '010100',
    judgment: {
      zh: '利西南；无所往，其来复吉；有攸往，夙吉。',
      en: 'Deliverance. The southwest furthers. If nothing is undertaken, there is a return that brings good fortune. If it is time to act, how could this be prevented?',
    },
  },
  {
    id: 41,
    name: {
      zh: '损',
      en: 'Decrease',
    },
    name_eng: 'sun',
    full_name: {
      zh: '山泽损 (shān zé sǔn)',
      en: 'Mountain over Lake',
    },
    pronunciation: 'sǔn',
    symbol: '䷨',
    binary: '110001',
    judgment: {
      zh: '有孚，元吉，无咎，可贞；利有攸往。曷之用？二簋可用享。',
      en: 'Decrease combined with sincerity brings about supreme good fortune without blame. One may be persevering in this. It furthers one to undertake something. How is this to be carried out? One may use two small bowls for the sacrifice.',
    },
  },
  {
    id: 42,
    name: {
      zh: '益',
      en: 'Increase',
    },
    name_eng: 'yi',
    full_name: {
      zh: '风雷益 (fēng léi yì)',
      en: 'Wind over Thunder',
    },
    pronunciation: 'yì',
    symbol: '䷩',
    binary: '100011',
    judgment: {
      zh: '利有攸往；利涉大川。',
      en: 'Increase. It furthers one to undertake something. It furthers one to cross the great water.',
    },
  },
  {
    id: 43,
    name: {
      zh: '夬',
      en: 'Break-through',
    },
    name_eng: 'guai',
    full_name: {
      zh: '泽天夬 (zé tiān guài)',
      en: 'Lake over Heaven',
    },
    pronunciation: 'guài',
    symbol: '䷪',
    binary: '111110',
    judgment: {
      zh: '扬于王庭，孚号有厉；告自邑，不利即戎；利有攸往。',
      en: "Break-through. One must resolutely make the matter known at the court of the king. It must be announced truthfully. Danger. It is necessary to notify one's own city. It does not further to resort to arms. It furthers one to undertake something.",
    },
  },
  {
    id: 44,
    name: {
      zh: '姤',
      en: 'Coming to Meet',
    },
    name_eng: 'gou',
    full_name: {
      zh: '天风姤 (tiān fēng gòu)',
      en: 'Heaven over Wind',
    },
    pronunciation: 'gòu',
    symbol: '䷫',
    binary: '011111',
    judgment: {
      zh: '女壮，勿用取女。',
      en: 'Coming to Meet. The maiden is powerful. One should not marry such a maiden.',
    },
  },
  {
    id: 45,
    name: {
      zh: '萃',
      en: 'Gathering Together',
    },
    name_eng: 'cui',
    full_name: {
      zh: '泽地萃 (zé dì cuì)',
      en: 'Lake over Earth',
    },
    pronunciation: 'cuì',
    symbol: '䷬',
    binary: '000110',
    judgment: {
      zh: '亨；王假有庙。利见大人，亨，利贞；用大牲吉；利有攸往。',
      en: 'Gathering Together. Success. The king approaches his temple. It furthers one to see the great man. This brings success. Perseverance furthers. To offer great sacrifice brings good fortune. It furthers one to undertake something.',
    },
  },
  {
    id: 46,
    name: {
      zh: '升',
      en: 'Pushing Upward',
    },
    name_eng: 'sheng',
    full_name: {
      zh: '地风升 (dì fēng shēng)',
      en: 'Earth over Wind',
    },
    pronunciation: 'shēng',
    symbol: '䷭',
    binary: '011000',
    judgment: {
      zh: '元亨；用见大人，勿恤；南征吉。',
      en: 'Pushing Upward has supreme success. One must see the great man. Fear not. Departure toward the south brings good fortune.',
    },
  },
  {
    id: 47,
    name: {
      zh: '困',
      en: 'Oppression',
    },
    name_eng: 'kun',
    full_name: {
      zh: '泽水困 (zé shuǐ kùn)',
      en: 'Lake over Water',
    },
    pronunciation: 'kùn',
    symbol: '䷮',
    binary: '010110',
    judgment: {
      zh: '亨；贞大人吉，无咎；有言不信。',
      en: 'Oppression. Success. Perseverance. The great man brings good fortune. No blame. When one has something to say, it is not believed.',
    },
  },
  {
    id: 48,
    name: {
      zh: '井',
      en: 'The Well',
    },
    name_eng: 'jing',
    full_name: {
      zh: '水风井 (shuǐ fēng jǐng)',
      en: 'Water over Wind',
    },
    pronunciation: 'jǐng',
    symbol: '䷯',
    binary: '011010',
    judgment: {
      zh: '改邑不改井，无丧无得。往来井井。汔至亦未繘井，羸其瓶，凶。',
      en: 'The Well. The town may be changed, but the well cannot be changed. It neither decreases nor increases. They come and go and draw from the well. If one gets down almost to the water and the rope does not go all the way, or the jug breaks, it brings misfortune.',
    },
  },
  {
    id: 49,
    name: {
      zh: '革',
      en: 'Revolution',
    },
    name_eng: 'ge',
    full_name: {
      zh: '泽火革 (zé huǒ gé)',
      en: 'Lake over Fire',
    },
    pronunciation: 'gé',
    symbol: '䷰',
    binary: '101110',
    judgment: {
      zh: '巳日乃孚；元亨，利贞；悔亡。',
      en: 'Revolution. On your own day you are believed. Supreme success, furthering through perseverance. Remorse disappears.',
    },
  },
  {
    id: 50,
    name: {
      zh: '鼎',
      en: 'The Cauldron',
    },
    name_eng: 'ding',
    full_name: {
      zh: '火风鼎 (huǒ fēng dǐng)',
      en: 'Fire over Wind',
    },
    pronunciation: 'dǐng',
    symbol: '䷱',
    binary: '011101',
    judgment: {
      zh: '元吉，亨。',
      en: 'The Cauldron. Supreme good fortune. Success.',
    },
  },
  {
    id: 51,
    name: {
      zh: '震',
      en: 'The Arousing',
    },
    name_eng: 'zhen',
    full_name: {
      zh: '震为雷 (zhèn wéi léi)',
      en: 'Thunder over Thunder',
    },
    pronunciation: 'zhèn',
    symbol: '䷲',
    binary: '100100',
    judgment: {
      zh: '亨。震来虩虩，笑言哑哑；震惊百里，不丧匕鬯。',
      en: 'The Arousing. Success. Thunder comes resounding forth. Laughing words - Ha-ha! The thunder terrifies for a hundred miles, but he does not let fall the sacrificial spoon and chalice.',
    },
  },
  {
    id: 52,
    name: {
      zh: '艮',
      en: 'Keeping Still',
    },
    name_eng: 'gen',
    full_name: {
      zh: '艮为山 (gèn wéi shān)',
      en: 'Mountain over Mountain',
    },
    pronunciation: 'gèn',
    symbol: '䷳',
    binary: '001001',
    judgment: {
      zh: '艮其背，不获其身；行其庭，不见其人。无咎。',
      en: 'Keeping Still. Keeping his back still so that he no longer feels his body. He goes into his courtyard and does not see his people. No blame.',
    },
  },
  {
    id: 53,
    name: {
      zh: '渐',
      en: 'Development',
    },
    name_eng: 'jian',
    full_name: {
      zh: '风山渐 (fēng shān jiàn)',
      en: 'Wind over Mountain',
    },
    pronunciation: 'jiàn',
    symbol: '䷴',
    binary: '001011',
    judgment: {
      zh: '女归吉；利贞。',
      en: 'Development. The maiden is given in marriage. Good fortune. Perseverance furthers.',
    },
  },
  {
    id: 54,
    name: {
      zh: '归妹',
      en: 'The Marrying Maiden',
    },
    name_eng: 'guimei',
    full_name: {
      zh: '雷泽归妹 (léi zé guī mèi)',
      en: 'Thunder over Lake',
    },
    pronunciation: 'guī mèi',
    symbol: '䷵',
    binary: '110100',
    judgment: {
      zh: '征凶，无攸利。',
      en: 'The Marrying Maiden. Undertakings bring misfortune. Nothing that would further.',
    },
  },
  {
    id: 55,
    name: {
      zh: '丰',
      en: 'Abundance',
    },
    name_eng: 'feng',
    full_name: {
      zh: '雷火丰 (léi huǒ fēng)',
      en: 'Thunder over Fire',
    },
    pronunciation: 'fēng',
    symbol: '䷶',
    binary: '101100',
    judgment: {
      zh: '亨；王假之。勿忧，宜日中。',
      en: 'Abundance has success. The king attains abundance. Be not sad. Be like the sun at midday.',
    },
  },
  {
    id: 56,
    name: {
      zh: '旅',
      en: 'The Wanderer',
    },
    name_eng: 'lv',
    full_name: {
      zh: '火山旅 (huǒ shān lǚ)',
      en: 'Fire over Mountain',
    },
    pronunciation: 'lǚ',
    symbol: '䷸',
    binary: '001101',
    judgment: {
      zh: '小亨；旅贞吉。',
      en: 'The Wanderer. Success through smallness. Perseverance brings good fortune to the wanderer.',
    },
  },
  {
    id: 57,
    name: {
      zh: '巽',
      en: 'The Gentle',
    },
    name_eng: 'xun',
    full_name: {
      zh: '巽为风 (xùn wéi fēng)',
      en: 'Wind over Wind',
    },
    pronunciation: 'xùn',
    symbol: '䷹',
    binary: '011011',
    judgment: {
      zh: '小亨；利有攸往；利见大人。',
      en: 'The Gentle. Success through what is small. It furthers one to have somewhere to go. It furthers one to see the great man.',
    },
  },
  {
    id: 58,
    name: {
      zh: '兑',
      en: 'The Joyous',
    },
    name_eng: 'dui',
    full_name: {
      zh: '兑为泽 (duì wéi zé)',
      en: 'Lake over Lake',
    },
    pronunciation: 'duì',
    symbol: '䷺',
    binary: '110110',
    judgment: {
      zh: '亨，利贞。',
      en: 'The Joyous. Success. Perseverance is favorable.',
    },
  },
  {
    id: 59,
    name: {
      zh: '涣',
      en: 'Dispersion',
    },
    name_eng: 'huan',
    full_name: {
      zh: '风水涣 (fēng shuǐ huàn)',
      en: 'Wind over Water',
    },
    pronunciation: 'huàn',
    symbol: '䷻',
    binary: '010011',
    judgment: {
      zh: '亨；王假有庙。利涉大川，利贞。',
      en: 'Dispersion. Success. The king approaches his temple. It furthers one to cross the great water. Perseverance furthers.',
    },
  },
  {
    id: 60,
    name: {
      zh: '节',
      en: 'Limitation',
    },
    name_eng: 'jie',
    full_name: {
      zh: '水泽节 (shuǐ zé jié)',
      en: 'Water over Lake',
    },
    pronunciation: 'jié',
    symbol: '䷼',
    binary: '110010',
    judgment: {
      zh: '亨；苦节不可贞。',
      en: 'Limitation. Success. Galling limitation must not be persevered in.',
    },
  },
  {
    id: 61,
    name: {
      zh: '中孚',
      en: 'Inner Truth',
    },
    name_eng: 'zhongfu',
    full_name: {
      zh: '风泽中孚 (fēng zé zhōng fú)',
      en: 'Wind over Lake',
    },
    pronunciation: 'zhōng fú',
    symbol: '䷽',
    binary: '110011',
    judgment: {
      zh: '豚鱼吉；利涉大川；利贞。',
      en: 'Inner Truth. Pigs and fishes. Good fortune. It furthers one to cross the great water. Perseverance furthers.',
    },
  },
  {
    id: 62,
    name: {
      zh: '小过',
      en: 'Preponderance of the Small',
    },
    name_eng: 'xiaoguo',
    full_name: {
      zh: '雷山小过 (léi shān xiǎo guò)',
      en: 'Thunder over Mountain',
    },
    pronunciation: 'xiǎo guò',
    symbol: '䷾',
    binary: '001100',
    judgment: {
      zh: '亨，利贞。可小事，不可大事。飞鸟遗之音，不宜上，宜下。大吉。',
      en: 'Preponderance of the Small. Success. Perseverance furthers. Small things may be done; great things should not be done. The flying bird brings the message: It is not well to strive upward, it is well to remain below. Great good fortune.',
    },
  },
  {
    id: 63,
    name: {
      zh: '既济',
      en: 'After Completion',
    },
    name_eng: 'jiji',
    full_name: {
      zh: '水火既济 (shuǐ huǒ jì jì)',
      en: 'Water over Fire',
    },
    pronunciation: 'jì jì',
    symbol: '䷿',
    binary: '101010',
    judgment: {
      zh: '亨小，利贞。初吉终乱。',
      en: 'After Completion. Success in small matters. Perseverance furthers. At the beginning good fortune, at the end disorder.',
    },
  },
  {
    id: 64,
    name: {
      zh: '未济',
      en: 'Before Completion',
    },
    name_eng: 'weiji',
    full_name: {
      zh: '火水未济 (huǒ shuǐ wèi jì)',
      en: 'Fire over Water',
    },
    pronunciation: 'wèi jì',
    symbol: '䷿',
    binary: '010101',
    judgment: {
      zh: '亨；小狐汔济，濡其尾；无攸利。',
      en: 'Before Completion. Success. But if the little fox, after nearly completing the crossing, gets his tail in the water, there is nothing that would further.',
    },
  },
] as const;

export const findGuaByBinary = (binary: string) =>
  guaData.find((gua) => gua.binary === binary);

export const getAllGuaData = () => guaData;
