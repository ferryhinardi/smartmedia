const models = require('../models');

module.exports = {
	up: (queryInterface, Sequelize, done) => {
		models.Exam.sync()
			.then(() => models.Exam.bulkCreate([
				{ examId: 1, fileId: null, no: 1, question: 'Ordinary table salt is sodium chloride. What is baking soda?', answer: 'D' },
				{ examId: 2, fileId: null, no: 2, question: 'Ozone hole refers to', answer: 'C' },
				{ examId: 3, fileId: '567177a8e2879', no: 1, question: 'Jelaskan gambar berikut!', answer: 'D' },
				{ examId: 4, fileId: null, no: 3, question: 'Pine, fir, spruce, cedar, larch and cypress are the famous timber-yielding plants of which several also occur widely in the hilly regions of India. All these belong to', answer: 'B' },
				{ examId: 5, fileId: null, no: 4, question: 'Pollination is best defined as', answer: 'A' },
				{ examId: 6, fileId: null, no: 5, question: 'Plants receive their nutrients mainly from', answer: 'D' },
				{ examId: 7, fileId: null, no: 6, question: 'Movement of cell against concentration gradient is called', answer: 'B' },
				{ examId: 8, fileId: null, no: 7, question: 'Photosynthesis generally takes place in which parts of the plant?', answer: 'A' },
				{ examId: 9, fileId: null, no: 8, question: 'Most fish do not sink in water because of the presence of <br /><br /> I.    swim bladder<br /> II.   air bladder<br /> III.  air sacs<br /> IV.  air in spongy bones<br />', answer: 'A' },
				{ examId: 10, fileId: null, no: 9, question: 'Plants synthesis protein from', answer: 'C' },
				{ examId: 11, fileId: null, no: 10, question: 'Plants absorb dissolved nitrates from soil and convert them into ', answer: 'A' },
				{ examId: 12, fileId: null, no: 11, question: 'Out of 900 reported species of living gymnosperms, conifers are represented by about 500 species, About 2,50,000 species of angiosperms (flowering plants) have also been reported in the world. The vast and dominant woodlands in Europe, Asia, North America and mountains such as Himalayas are wooded with', answer: 'C' },
				{ examId: 13, fileId: null, no: 12, question: 'One of the following is not a function of bones.', answer: 'C' },
				{ examId: 14, fileId: null, no: 13, question: 'Plants absorb most part of water needed by them through their', answer: 'C' },
				{ examId: 15, fileId: null, no: 14, question: 'Photo-oxidation is', answer: 'D' },
				{ examId: 16, fileId: null, no: 15, question: 'Process of cell division can take place by', answer: 'C' },
				{ examId: 17, fileId: null, no: 16, question: 'Most highly intelligent mammals are', answer: 'B' },
				{ examId: 18, fileId: null, no: 17, question: 'Plant development is influenced by', answer: 'D' },
				{ examId: 19, fileId: null, no: 18, question: 'Prokaryotic cells lack', answer: 'D' },
				{ examId: 20, fileId: null, no: 19, question: 'Photosynthesis takes place faster in', answer: 'B' },
				{ examId: 21, fileId: null, no: 20, question: 'Nucleus, the genetic material containing rounded body in each cell, was first discovered in 1831 by', answer: 'B' },
				{ examId: 22, fileId: null, no: 21, question: 'Primary phloem develops from', answer: 'D' },
				{ examId: 23, fileId: null, no: 22, question: 'Other than spreading malaria, anopheles mosquitoes are also vectors of', answer: 'B' },
				{ examId: 24, fileId: null, no: 23, question: 'Plants that grow in saline water are called', answer: 'A' },
				{ examId: 25, fileId: null, no: 24, question: 'Pyorrhoea is a disease of the', answer: 'B' },
				{ examId: 26, fileId: null, no: 25, question: 'O2 released in the process of photosynthesis comes from', answer: 'B' },
				{ examId: 27, fileId: null, no: 26, question: 'Placenta is the structure formed', answer: 'A' },
				{ examId: 28, fileId: null, no: 27, question: 'Plants hormone that induces cell division is', answer: 'C' },
				{ examId: 29, fileId: null, no: 28, question: 'Neurospora is used as genetic material because', answer: 'A' },
				{ examId: 30, fileId: null, no: 29, question: 'Phloem is a tissue found in', answer: 'B' },
				{ examId: 31, fileId: null, no: 30, question: 'N2 content is kept constant in the biosphere due to', answer: 'C' },
				{ examId: 32, fileId: null, no: 31, question: 'out of proteins, lipids and carbohydrates present in a cell membrane, what is true?', answer: 'B' },
				{ examId: 33, fileId: null, no: 32, question: 'Potato is a modified form (outgrowth) of', answer: 'B' },
				{ examId: 34, fileId: null, no: 33, question: 'Of the following taxonomic categories which is the most inclusive (i.e. is the highest in hierarchy)?', answer: 'C' },
				{ examId: 35, fileId: null, no: 34, question: 'Prothrombin which helps in clotting of blood is released by', answer: 'D' },
				{ examId: 36, fileId: null, no: 35, question: 'Myopia is connected with', answer: 'B' },
				{ examId: 37, fileId: null, no: 36, question: 'Most of the red, blue and purple colours of plants are due to a pigment called', answer: 'A' },
				{ examId: 38, fileId: null, no: 37, question: 'Plants developing in dry conditions are', answer: 'A' },
				{ examId: 39, fileId: null, no: 38, question: 'Plants growing on sand are called as', answer: 'D' },
				{ examId: 40, fileId: null, no: 39, question: 'Our skin, when exposed to excess sunlight, becomes dark. This is because our skin pigments called', answer: 'B' },
				{ examId: 41, fileId: null, no: 40, question: 'Ramapithecus and Cro-Magnon man are considered', answer: 'A' },
			]))
			.then(() => done())
			.catch(err => console.log(err));
	},
	down: (queryInterface, Sequelize, done) => {
		models.Exam.drop()
			.then(() => done())
			.catch(err => console.log(err));
	},
};
