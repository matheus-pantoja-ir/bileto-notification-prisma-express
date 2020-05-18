interface BaseRepository {
    save<T>(arg?: T): any;
    fetch<T>(arg?: T): any
    delete<T>(arg?: T): any
    update<T>(arg?: T): any
}

export default BaseRepository