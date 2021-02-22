# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in textile/__init__.py
from textile import __version__ as version

setup(
	name='textile',
	version=version,
	description='Textile Billing',
	author='Venkatesh',
	author_email='venkatesh112k@gmail.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
