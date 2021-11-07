// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface VOD {
	data: DatumVod[];
	pagination: Pagination;
}

export interface DatumVod {
	id: string;
	stream_id: string;
	user_id: string;
	user_login: User;
	user_name: User;
	title: string;
	description: string;
	created_at: string;
	published_at: string;
	url: string;
	thumbnail_url: string;
	viewable: Viewable;
	view_count: number;
	language: Language;
	type: Type;
	duration: string;
	muted_segments: null;
}

export enum Language {
	En = "en",
	LanguageEN = "EN",
}

export enum Type {
	Archive = "archive",
	Highlight = "highlight",
	Upload = "upload",
}

export enum User {
	Jamiepinelive = "jamiepinelive",
}

export enum Viewable {
	Public = "public",
}

export interface Pagination {
	cursor: string;
}
