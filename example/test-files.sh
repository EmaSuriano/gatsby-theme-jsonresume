#!/bin/bash

DIR=`dirname "$0"`;
RESUME_HTML=`$DIR/static/resume.html`
RESUME_PDF=`$DIR/static/resume.pdf`
RESUME_THEME_HTML=`$DIR/static/resume-custom-theme.html`
RESUME_THEME_PDF=`$DIR/static/resume-custom-theme.pdf`

checkFile() { 
  if [ ! -f $1]
  then
    echo "$1 missing"
    exit 1
  fi
}

checkFile $RESUME_HTML
# checkFile "$RESUME.pdf"
# checkFile "$RESUME_THEME.html"
# checkFile "$RESUME_THEME.pdf"
