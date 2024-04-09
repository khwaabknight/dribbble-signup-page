import FooterLinks from "./FooterLinks"
import brands from '../../data/footerlinks/brands.json'
import company from '../../data/footerlinks/company.json'
import designassets from '../../data/footerlinks/designassets.json'
import designresources from '../../data/footerlinks/designresources.json'
import directories from '../../data/footerlinks/directories.json'
import fordesigners from '../../data/footerlinks/fordesigners.json'
import hiredesigners from '../../data/footerlinks/hiredesigners.json'

function Footer() {
  return (
    <div className="w-11/12 max-w-screen-2xl mx-auto flex flex-col gap-5 mb-10 ">
        <div className="grid lg:grid-cols-8 sm:grid-cols-2 gap-y-20">
            <div className="lg:col-span-2 clear-start flex flex-col gap-3 max-w-72">
                <div className="w-28">
                    <img src="/logos/dribbblelogopink.png"/>
                </div>
                <p>Dribbble in the world's leading community for creatives to share, grow, and get hired.</p>
                <div className="flex items-center gap-3 mt-3">
                    <i className="fa-brands fa-dribbble"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-pinterest"></i>
                </div>
            </div>
            <div className="lg:col-span-6 grid lg:grid-cols-5 grid-cols-2 gap-y-5">
                <FooterLinks title={fordesigners.title} links={fordesigners.links} />
                <div className="flex flex-col gap-y-5">
                    <FooterLinks title={hiredesigners.title} links={hiredesigners.links} />
                    <FooterLinks title={brands.title} links={brands.links} />
                </div>
                <FooterLinks title={company.title} links={company.links} />
                <div className="flex flex-col gap-y-5">
                    <FooterLinks title={directories.title} links={directories.links} />
                    <FooterLinks title={designassets.title} links={designassets.links} />
                </div>
                <FooterLinks title={designresources.title} links={designresources.links} />
            </div>
        </div>
        <div className="flex justify-between">
            <div className="flex items-center gap-2 text-gray-500">
                <i className="fa-regular fa-copyright"></i>
                <p> 2023 Dribbble. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
                <p><span className=" text-black font-bold">20.501,853</span> shots dribbbled</p>
                <i className="fa-brands fa-dribbble font-semibold text-accent-1 bg-accent-1/60 rounded-full"></i>
            </div>
        </div>
    </div>
  )
}

export default Footer