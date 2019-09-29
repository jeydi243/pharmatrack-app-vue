/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
let bonlivraison = {
	Id: "",
	medicaments: "", //donne la liste des medicaments
	emetteur: [], //un tableau des identifiant de medicament
	status: "",
	bonCommande: "" // id du bon de commande
}
let itemlist={
	qte:0,
	medoc:""
}
let boncommande = {
	Id: "",
	status: "",
	itemlist: itemlist, //seulement du texte qui decrit le nom du medicament
	emetteur:"", //l'id de l'emetteur
	destinataire: "" //l'id du destinataire
}
let pharmacien = {
	numeroOrdre: "",
	nom: "",
	email: "",
	etablissement: ""
}
let etablissement = {
	numAutorisation: "",
	nom: "",
	addresse: "",
	pharmacien: "", //doit faire reference a un numero d'ordre d'un pharmacien
	login: "",
	pass: ""
}
let medicament = {
	code: "",
	nom: "",
	description: "",
	dateFab: null,
	dateExp: null,
	proprio: "" //doit correspondre a une identité d'un fabricant
}

export default new Vuex.Store({
	state: {
		login: String,
		CurrentParticipant: null,
		typeEtablissement: "",
		cardToUse:"",
		Medicament: medicament,
		isLogged: false,
		Fabricant: etablissement,
		Grossiste: etablissement,
		Pharmacie: etablissement,
		Pharmacien: pharmacien,
		BonCommande: boncommande,
		BonLivraison: bonlivraison
	},
	mutations: {
		login(state,cardToUse,typeEtablissement) {
			state.isLogged = true
			state.cardToUse = cardToUse;
			state.typeEtablissement = typeEtablissement
		},
		logout(state) {
			state.isLogged = false;
			state.cardToUse = ""
			state.typeEtablissement = null
		}
	},
	actions: {

	},
	getters: {
		IS_LOGGED: (state) => {
			return state.isLogged
		},
		MEDICAMENT: (state) => {
			return state.Medicament
		},
		FABRICANT: (state) => {
			return state.Fabricant
		},
		GROSSISTE: (state) => {
			return state.Grossiste
		},
		PHARMACIE: (state) => {
			return state.Pharmacie
		},
		PHARMACIEN: (state) => {
			return state.Pharmacien
		},
		BONL: (state) => {
			return state.BonLivraison
		},
		BONC: (state) => {
			return state.BonCommande
		},
		cardToUse: (state) => {
			return state.cardToUse
		},
		typeParticipant: (state) => {
			return state.typeParticipant
		}
	}
});