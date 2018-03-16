// /api/getFormVals/
export const formVals = {
	error: false,
	graph: {
		x: ["name","no_of_parents","parent_salary","age","handicapped","no_of_siblingss","caste","religion"],
		y: ["name","no_of_parents","parent_salary","age","handicapped","no_of_siblingss","caste","religion"],
		filters: {
				no_of_siblings: {
					name: 'no_of_siblings',
					type: 'int'
				},
				parent_salary: { 
					name: 'parent_salary',
					type: 'int',
				},
				is_handicapped: {
					name:'is_handicapped',
					type: 'bool'
				},
		},
	},
	list: {
		x: ['average_marks', 'sports_activity', 'cultural_activity'],
		filters:  {
				no_of_siblings: {
					name: 'no_of_siblings',
					type: 'int'
				},
				parent_salary: { 
					name: 'parent_salary',
					type: 'int',
				},
				is_handicapped: {
					name:'is_handicapped',
					type: 'bool'
				},
		},
	}
}

// api/get_all_graphs/
export const sampleGraphs = () => {
	let noSamples = 3
	let graphs = []
	let axes = ["name","no_of_parents","parent_salary","age","handicapped","no_of_siblingss","caste","religion"]
	let filters = [
					{name: "age", type: "int", op:'<', val: 12},
					{name: "caste", type: "string", op: '=', val: 'Open'},
					{name: "handicapped", type: "bool", 'op': '=', val: 'True'},
					{name: "name", type: "string", 'op': '=', 'val': 'Saumitra'},
					{name: "no_of_parents", type: "int", 'op': '=', 'val': 2},
					{name: "no_of_siblingss", type: "int", 'op': '<', 'val': 3},
					{name: "parent_salary", type: "int", 'op': '>=', val: 30000},
					{name: "religion", type: "string", 'op': '=', val: 'Hindu'},
				]

	for(let i = 0 ; i < noSamples; i++){
		let x = axes[Math.floor(Math.random()*axes.length)],
			y = axes[Math.floor(Math.random()*axes.length)],
			filter = filters[Math.floor(Math.random()*filters.length)],
			data = [];

		let d = {}
		for(let j = 0 ; j < 10; j ++){
			d = {}
			d[x] = j+1
			d[y] = Math.ceil(Math.random() * (3000 - 1000) + 1000)
			d[`${filter.name} ${filter.op} ${filter.val}`] = Math.ceil(Math.random() * (3000 - 1000) + 1000)
			data.push(d)
		}

		graphs.push({
			name: 'Hello Graphs!',
			id: i+1,
			x: x,
			y: y,
			filters: [filter],
			data: data,
		})
	}

	return {
		error: false,
		graphs: graphs,
	}
}

export const sampleLists = () => {
	const noSamples = 2
	let graphs = []
	let axes = ["name","no_of_parents","parent_salary","age","handicapped","no_of_siblingss","caste","religion"]
	let filters = [
					{name: "age", type: "int", op:'<', val: 12},
					{name: "caste", type: "string", op: '=', val: 'Open'},
					{name: "handicapped", type: "bool", 'op': '=', val: 'True'},
					{name: "name", type: "string", 'op': '=', 'val': 'Saumitra'},
					{name: "no_of_parents", type: "int", 'op': '=', 'val': 2},
					{name: "no_of_siblingss", type: "int", 'op': '<', 'val': 3},
					{name: "parent_salary", type: "int", 'op': '>=', val: 30000},
					{name: "religion", type: "string", 'op': '=', val: 'Hindu'},
				]

	for(let i = 0 ; i < noSamples; i++){
		let x = axes[Math.floor(Math.random()*axes.length)],
			filter = filters[Math.floor(Math.random()*filters.length)],
			data = ['Saumitra', 'Adit', 'Ayush', 'Gaurav', 'Anas', 'Akshay', 'Batman', 'Superman', 'Shaktiman'];

		graphs.push({
			name: 'Hello Lists',
			id: i+1,
			x: x,
			filters: [filter],
			data: data,
		})
	}

	return {
		error: false,
		lists: graphs,
	}
}

export const exampleGraph = (graphdata) => {
	const { x, y, filters } = graphdata
	let data = []
	let d = {}
	const sample = [
		[1, 4000, 2400],
		[2, 3000, 1398],
		[3, 2000, 9800],
		[4, 2780, 3908],
		[5, 1890, 4800],
		[6, 2390, 3800],
		[7, 3490, 4300]]

	for(let i = 0 ; i < 7; i++){
		d = {}
		d[x] = sample[i][0]
		d[y] = sample[i][1]
		if(filters.length > 0){
			d[filters[0].name] = sample[i][2]
		}

		data.push(d)
	}

	return data
  }