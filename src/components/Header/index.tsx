import { Button, Layout } from "antd";
import "./index.scss";
import Image from "next/image";
import Link from "next/link";


const { Header: AntdHeader } = Layout;


export default function Header() {
    

    return (
        <AntdHeader id="Header">
            {/* 头部左侧栏 */}
            <div className="navbar-links">
                {/* logo */}
                <div className="logo">
                    <Image 
                        // fill 
                        priority
                        width={146}
                        height={33.81}
                        alt="logo" 
                        src="/images/img/logo.png" 
                    />
                </div>
                {/* 链接 */}
                <Link href="/tutorials">教程</Link>
                <Link href="/challenges">挑战</Link>
                <Link href="/vitae">认证</Link>
            </div>
            {/* 头部右侧栏 */}
            <div className="navbar-btns">
                <Button
                    // onClick={() => openModal()} 
                    className="btn-connect"
                    id='hover-btn-full'
                >连接钱包</Button>
            </div>
        </AntdHeader>
    )
}