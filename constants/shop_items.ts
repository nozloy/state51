export interface ShopItem {
	id: number
	name: string
	price: number
	image: string
	volume: number
	contents?: string
	description: string
}

export const shop_items = [
	{
		id: 1,
		name: 'Паста для фиксации волос с кератином',
		price: 900,
		image: 'hair_paste_50ml.jpg',
		volume: 50,
		contents: '',
		description:
			'Паста имеет среднюю степень фиксации и легкий блеск. Благодаря входящим в состав компонентов, обеспечивает мягкость и блеск волос, а также поддерживает уровень увлажнения волос, предотвращая их ломкость,а гидролизованный кератин укрепляет волосяные структуры, делая их более эластичными. Легко смывается водой. Способ применения: Нанесите небольшое количество пасты на ладони и равномерно распределите ее по влажным или сухим волосам. Создайте желаемую укладку, а затем высушите волосы феном или дайте им высохнуть естественным образом. При необходимости можно добавить еще немного пасты для усиления',
	},
	{
		id: 2,
		name: 'Кремовая помада для волос Crème pomade',
		price: 900,
		image: 'creme_pomade_50ml.jpg',
		volume: 50,
		contents:
			'Aqua, VP/VA Copolymer, Isopropyl Myristate, Petrolatum, Glycery! Stearate, PEG-100 Stearate, Copernicia Cerifera (Carnauba) Wax, Cetearyl Alcohol, Propylene Glycol, Kaolin, Ozokerite, Paraffinum Liquidum, Glycerin, Polymethylsilsesqui- oxane, Sodium Polyacrylate, C13-14 Isoparaffin, Laureth-7, Hydrolyzed Keratin, PEG-40',
		description:
			'Кремовая помада для волос имеет легкую степень фиксации и блеска. Придает укладке дополнительный объем и текстуру. Гидролизованный кератин в составе этого продукта укрепляет, увлажняет и защищает волосы от негативного воздействия окружающей среды. Идеально подходит для пористых волос. Легко смывается водой. Способ применения: Нанесите небольшое количество продукта на ладони и равномерно распределите по влажным или сухим волосам. Создайте желаемую укладку, а затем высушите волосы феном или дайте им высохнуть естественным образом. При необходимости можно добавить еще немного продукта для усиления фиксации или создания дополнительного объема. ',
	},
	{
		id: 3,
		name: 'Масло для бороды увлажняющее Beard oil',
		price: 1000,
		image: 'beard_oil_50ml.jpg',
		volume: 50,
		contents:
			'Ricinus Communis ¡Casto sped O, Macadamia Ternifolia (Macac amia) Seed Oli, Pe sea Gratissima (Avocado) Oil, Helianthus Annuus (Sunflower) Se ed Oil, Pa fum, Tocopheryl Acetate, Tocophe 3l, Linalool, Hydroxycitronellal, Coumarin, Citral. Limonane.',
		description:
			'Натуральный состав продукта, включающий масло подсолнечника, масло авокадо, касторовое масто, масло макадамии и витамин Е, обеспечивает полноценный уход, увлажнение, питание, защиту и укрепление для здоровой, густой и гладкой бороды. Способ применения: Нанесите на ладони 2,5 капель масла для бороды, разогрейте в Руках и массажными движениями нанесите на всю бороду, затем расчешите волосы.',
	},
	{
		id: 4,
		name: 'Матовая глина для фиксации волос с протеинами риса Matte clay',
		price: 1600,
		image: 'matte_clay_95ml.jpg',
		volume: 95,
		contents:
			'Aqua, Beeswax, VP/NA Copolymer, Petrolatum, Glyceryl Stearate, PEG-100 Stearate, Cetearyl Alcohol, Chassoul Clay, Glycerin, Ozokerite, Ceteareth-25, Paraffinum Liquidum, Polyviny|pyrrolidone, PEG-75 Lanolin, Copernicia Cerifera (Carnauba) Wax, PEG-7 Glyceryl Cocoate, Isopropyl Myristate, Polymethylsilsesquioxane, Hydrolyzed Rice Protein.',
		description:
			'Сочетание глины и увлажняющих компонентов, обеспечивает надежную фиксацию укладки, при этом не оставляя ощущения жирности волос. Сочетание вазелина, пчелиного воска и карнаубского воска уплотняет волосы, придает эластичность и дополнительный объем. Гидролизованные протеины риса укрепляют волосы и обеспечивают защиту от вредного воздействия окружающей среды. Легко смывается водой. В основе аромата: вишня, амарант, алтей, роза. Способ применения: Нанесите небольшое количество глины на ладони и равномерно распределите ее по влажным или сухим волосам. Создайте желаемую укладку, а затем высушите волосы феном или дайте им высохнуть естественным образом. При необходимости можно добавитьеше немного глины для усиления фиксации или создания дополнительного объема. ',
	},
	{
		id: 5,
		name: 'Бальзам для бороды с маслом авокадо и макадамии Beard Balm',
		price: 1400,
		image: 'beard_balm_95ml.jpg',
		volume: 95,
		contents:
			'Aqua, Polyacrylamide, C13-14 Isoparaffin, Laureth-7, Hydroxyethyl Urea, Beeswax, Betaine, Macadamia Ternifolia Seed Oil, Glyceryl Stearate SE, Persea Gratissima (Avocado) Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Glycerin, Ceteareth-20, VP/NA Copolymer, Cyclopentasiloxane, Dimethiconol, Lanolin, Tocopheryl Acetate, Aloe Barbadensis Leaf Juice, Disodium EDTA, Parfum, Phenoxyethanol, Ethylhexylglycerin.',
		description:
			'Бальзам для бороды придает волосам здоровый блеск и делает их послушными. Пчелиный воск в составе обеспечивает легкую и естественную фиксацию. Сок листьев алоэ вера и масло авокадо увлажняет кожу, предотвращая зуд и раздражение. Масло семян макадамии смягчает и восстанавливает структуру волос. Способ применения: Разотрите небольшое количество бальзама между пальцами. Равномерно нанесите на чистую, сухую или слегка влажную бороду, придавая ей желаемую форму.',
	},
	{
		id: 6,
		name: 'Кремовая помада для фиксации волос с кератином crème pomade',
		price: 1600,
		image: 'creme_pomade_95ml.jpg',
		volume: 95,
		contents:
			' Состав (INCI): Aqua, VP/VA Copolymer, Isopropyl Myristate, Petrolatum, Glycery! Stearate, PEG-100 Stearate, Copernicia Cerifera (Carnauba) Wax, Cetearyl Alcohol, Propylene Glycol, Kaolin, Ozokerite, Paraffinum Liquidum, Glycerin, Polymethylsilsesqui- oxane, Sodium Polyacrylate, C13-14 Isoparaffin, Laureth-7, Hydrolyzed Keratin, PEG-40.',
		description:
			'Кремовая помада для волос имеет легкую степень фиксации и блеска. Придает укладке дополнительный объем и текстуру. Гидролизованный кератин в составе этого продукта укрепляет, увлажняет и защищает волосы от негативного воздействия окружающей среды. Идеально подходит для пористых волос. Легко смывается водой. Способ применения: Нанесите небольшое количество продукта на ладони и равномерно распределите по влажным или сухим волосам. Создайте желаемую укладку, а затем высушите волосы феном или дайте им высохнуть естественным образом. При необходимости можно добавить еще немного продукта для усиления фиксации или создания дополнительного объема.',
	},
	{
		id: 7,
		name: 'Спрей с морской солью Sea salt spray',
		price: 1200,
		image: 'sea_salt_spray_200ml.jpg',
		volume: 200,
		contents:
			'Aqua, Sea Salt, Polysorbate 20, PEC-40 Hydrogenated Castor Oil, Hydrolyzed Keratin, Parfum, Disodium EDTA, Phenoxyethanol, Ethylhexylglycerin.',
		description:
			'Спрей, обогащенный гидролизованным кератином, восстанавливает поврежденные послушными. Морская соль придает волосам волосы, делая их более гладкими, блестящими и естественный объем и текстуру, а комплекс полимеров обеспечивает надежную фиксацию без склеивания. Способ применения: Встряхните флакон,- нанесите небольшое количество спрея на сухие или мокрые волосы. Распределить руками, высушить, задавая направление волосам.',
	},
	{
		id: 8,
		name: 'Шампунь с экстрактом ламинарии и алоэ вера',
		price: 1200,
		image: 'shampoo_300ml.jpg',
		volume: 300,
		contents: '',
		description:
			'Шампунь обеспечивает мягкое и эффективное очищение, не пересушивая волосы, и при этом активно ухаживает за кожей головы, придает волосам блеск. Экстракт Ламинарии питает и укрепляет волосяные фолликулы, стимулирует рост волос, усиливает их эластичность. Экстракт Алоэ-вера обладает увлажняющими, регенерурующими и успокаивающими свойствами. Экстракт зеленого чая обладает мощными антиоксидантными свойствами, бактерицидным и дезодорирующим действием. Шампунь легко распределяется на волосах, обеспечивает прекрасные кондиционирующие свойства, облегчает влажное и сухое расчесывание, уменьшает статику и делает волосы более послушными. Способ применения: нанесите на влажные волосы, вспеньте, помассируйте кожу головы, смойте тёплой водой.',
	},
	{
		id: 9,
		name: 'Очищающая пена для волос, лица и тела All in one',
		price: 1600,
		image: 'all_in_one_150ml.jpg',
		volume: 150,
		contents:
			'Aqua, disodium laureth sulfosuccinate, Cocamidopropyl betaine, glycerin, sodium c12-18 olefin Sulfonate, betaine, alde barbadensis leaf juice, hexyl decanol, Bisabolol, cetyl hydroxyproline palmitamide, stearic acid, Brassica campestris sterols, sodium cocoyl hydrolyzed Amaranth protein, panthenol, butylene glycol, sodum Hyaluronate, hydrolyzed rice protein, parfum, phenoxvethano. Ethylhexylglycerin.',
		description:
			'Наша формула деликатно удаляет загрязнения, излишки себума и остатки укладочных средств, не нарушая естественный баланс кожи и волос. Алоэ вера гель в составе увлажняет, успокаивает и смягчает кожу, способствует снятию раздражения, придает коже эластичность и гладкость. Гидролизованные протеины риса укрепляют волосы, придают им блеск и облегчают расчесывание. Подходит для ежедневного использования. Способ применения: При использовании для лица: нанесите небольшое количество пенки на влажную кожу лица, нежными массирующми движениями, избегая области вокруг глаз. Тщательно смойте Теплой водой. Для волос: нанесите на влажные волосы, вспеньте, помассируйте кожу головы и тщательно смойте водой. Для тела: нанесите на влажную кожу тела, вспеньте, Тщательно смойте водой. ',
	},
	{
		id: 10,
		name: 'Пена для укладки волос с морской солью Sea Foam',
		price: 1400,
		image: 'sea_foam_150ml.jpg',
		volume: 150,
		contents:
			'Aqua, VP/VA Copolymer, Cocamidopropyl Betaine, Betaine, hydrolyzed Rice Protein, Glycerin, Polyvinylpyrrolidone, PEG-40 Hydrogenated Castor Camelia Sinensis (Green Tea) Leaf Extract, Parfum, Salt, Cetrimonium Chloride, Polyquaternium-37, Panthenol, Phenoxyethanol, Ethylhexylglycerin.',
		description:
			'Наша пена с морской солью подчеркивает текстуру и добавляет объем волосам, при этом не склеивая их. Протеины риса в составе увлажняют и смягчают волосы, придают им эластичность. Сочетание пантенола и экстракта листьев зеленого чая укрепляет текстуру волос и защищает от повреждений. Пена подходит для всех типов волос, имеет легкую фиксацию и матовый финиш. Способ применения: Встряхните флакон. Нанесите не большое количество пены на влажные волосы, равномерно распределите по всей длине или на отдельные пряди. Дайте волосам высохнуть естественным путем или высушите феном. Для придания дополнительного объема сушите корни приподнимая пряди.',
	},
]
