import { NextResponse } from 'next/server';
import {prisma} from '../../../lib/prisma';

export async function GET () {
    try {
        const allVillas = await prisma.villas.findMany();
        return NextResponse.json({allVillas});
    }catch(error : any) {
        console.log("error:" , error);
        return NextResponse.json({ error: error?.message }, { status: 500 });
    }

}