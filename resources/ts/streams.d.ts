export {};
declare module  '@laravel-streams/streams-api' {
    export namespace  core_streams {
        export interface  Stream {
            entries?: Entry
        }
        export interface  Entry {
            id?: string
            name?: string
            description?: string
            config?: string
            fields?: any[]
        }
    }
    export namespace  core_applications {
        export interface  Stream {
            entries?: Entry
        }
        export interface  Entry {
            handle?: string
            match?: any[]
            config?: any[]
        }
    }
    export namespace  todos {
        export interface  Stream {
            entries?: Entry
        }
        export interface  Entry {
            id?: string
            title?: string
        }
    }
    export interface  IEntries {
        'core.streams': core_streams.Entry
        'core.applications': core_applications.Entry
        'todos': todos.Entry
        [key:string]: any
    }
    export interface  IStreams {
        'core.streams': core_streams.Stream
        'core.applications': core_applications.Stream
        'todos': todos.Stream
        [key:string]: any
    }
    export type StreamID = keyof Streams
}