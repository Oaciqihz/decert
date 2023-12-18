// 'use client'
import React from 'react';

export async function generateStaticParams() {
    return [{ id: '10475' }, { id: '10474' }]
}

async function getQuest(id: string) {
    const res = await fetch(`http://192.168.1.10:8087/api/v1/quests/${id}`, { cache: 'no-store' })
    const quest = await res.json()
   
    return quest
}

export default async function Page({
    params: { id }
}: {
    params: { id: string }
}) {

    const quest = await getQuest(id);

    return (
        <div>
            <h1>Hello {id}</h1>
            {
                quest &&
                <h2>{quest.data.description}</h2>
            }
        </div>
    )
}