import React from 'react';
import {Dialog, DialogContent, DialogTitle, IconButton} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import {useStylesSignIn} from "../../pages/SignIn";

interface ModalProps {
    title: string;
    children: React.ReactNode;
    onClose:() => void;
    classes?: ReturnType<typeof useStylesSignIn>;
    visible?: boolean,
}

export const ModalBlock:React.FC<ModalProps> = (
        {
            title,
            onClose,
            visible = false,
            children,
        }:ModalProps
    ):React.ReactElement | null => {

    if (!visible) {
        return null;
    }

    return (
        <Dialog open={visible} onClose={onClose}>
            <DialogTitle>
                <IconButton onClick={onClose} color="secondary" aria-label="close">
                    <CloseIcon style={{ fontSize: 26 }} color="secondary" />
                </IconButton>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    );
};

