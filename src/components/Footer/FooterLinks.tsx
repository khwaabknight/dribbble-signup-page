
type FooterLinksProps = {
    title:string;
    links: FooterLink[];
}
type FooterLink = {
    id:string;
    text:string;
    url:string;
}

function FooterLinks({title,links}:FooterLinksProps ) {
  return (
    <div className="flex flex-col">
        <h1 className="text-lg font-semibold">{title}</h1>
        <div className="flex flex-col gap-y-2">
            {
                links.map((link:FooterLink) => (
                    <a key={link.id} href={link.url} className="text-gray-500 hover:text-black">{link.text}</a>
                ))
            }
        </div>
        
    </div>
  )
}

export default FooterLinks