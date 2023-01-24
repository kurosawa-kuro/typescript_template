const beginTransaction = (connection: any) => {
    return new Promise<void>((resolve, reject) => {
        connection.beginTransaction((err: any) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        })
    });
}

const query = (connection: any, statement: string, params: any) => {
    return new Promise((resolve, reject) => {
        connection.query(statement, params, (err: any, results: []) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

const commit = (connection: any) => {
    return new Promise<void>((resolve, reject) => {
        connection.commit((err: any) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

const end = (connection: any) => {
    return new Promise<void>((resolve, reject) => {
        connection.end((err: any) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

const rollback = (connection: any, err: any) => {
    return new Promise((resolve, reject) => {
        connection.rollback(() => {
            reject(err);
        });
    });
};

module.exports = {
    beginTransaction: beginTransaction,
    query: query,
    commit: commit,
    rollback: rollback,
    end: end
};