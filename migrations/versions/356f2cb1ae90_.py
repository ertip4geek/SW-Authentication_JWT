"""empty message

Revision ID: 356f2cb1ae90
Revises: 2807edd385a2
Create Date: 2022-02-21 16:20:37.920184

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '356f2cb1ae90'
down_revision = '2807edd385a2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('roles', sa.Text(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'roles')
    # ### end Alembic commands ###
