import {useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import {useDocumentTitle} from "@/components/documentTitle";

export function usePageBasics(namespace: string, titleKey: string = "pageTitle") {
    const t = useTranslations(namespace);
    const common = useTranslations("common");
    const params = useParams();
    const locale = params.locale;

    useDocumentTitle(t(titleKey));

    return {t, common, locale};
}