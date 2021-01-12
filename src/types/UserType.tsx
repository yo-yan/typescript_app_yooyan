import React from 'react'

const UserType = () => {

    //課題２
    type MondaiType = {
        id: number;
        name: string;
        url: string;
        isStart: false;
    }

    let mondai: MondaiType = { id: 1, name: "hashimoto", url: "https://mondai.com", isStart: false }

    return (
        <div>

        </div>
    )
}

export default UserType
