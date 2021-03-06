"""empty message

Revision ID: ec972d7c08db
Revises: 356f2cb1ae90
Create Date: 2022-02-21 20:31:40.491183

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ec972d7c08db'
down_revision = '356f2cb1ae90'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'password',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=600),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'password',
               existing_type=sa.String(length=600),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
    # ### end Alembic commands ###
